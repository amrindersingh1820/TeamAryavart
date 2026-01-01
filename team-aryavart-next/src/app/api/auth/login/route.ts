import { NextRequest, NextResponse } from 'next/server';
import { findUserByEmail } from '@/lib/db';
import { encrypt } from '@/lib/auth';
import { loginSchema } from '@/lib/validations';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = loginSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { message: 'Invalid inputs', errors: result.error.flatten() },
                { status: 400 }
            );
        }

        const { email, password } = result.data;
        const user = await findUserByEmail(email);

        if (!user) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Create session
        const sessionToEncrypt = {
            userId: user.id,
            email: user.email,
            role: user.role,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        }
        const session = await encrypt(sessionToEncrypt);

        const response = NextResponse.json({ message: 'Login successful', user: { ...user, passwordHash: undefined } });

        response.cookies.set('session', session, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: sessionToEncrypt.expires,
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
