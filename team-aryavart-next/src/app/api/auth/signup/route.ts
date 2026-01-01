import { NextRequest, NextResponse } from 'next/server';
import { createUser, findUserByEmail } from '@/lib/db';
import { encrypt } from '@/lib/auth';
import { signupSchema } from '@/lib/validations';
import bcrypt from 'bcryptjs';


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = signupSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { message: 'Invalid inputs', errors: result.error.flatten() },
                { status: 400 }
            );
        }

        const { email, password, fullName, studentId, department, year } = result.data;

        if (await findUserByEmail(email)) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await createUser({
            id: crypto.randomUUID(),
            email,
            passwordHash: hashedPassword,
            fullName,
            studentId,
            department,
            year,
            role: 'student',
            status: 'pending',
            joinDate: new Date().toISOString(),
            participationCount: 0,
        });

        // Auto login after signup
        const sessionToEncrypt = {
            userId: newUser.id,
            email: newUser.email,
            role: newUser.role,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        };
        const session = await encrypt(sessionToEncrypt);

        const response = NextResponse.json({ message: 'Account created', user: { ...newUser, passwordHash: undefined } });

        response.cookies.set('session', session, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: sessionToEncrypt.expires,
            path: '/',
        });

        return response;

    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
