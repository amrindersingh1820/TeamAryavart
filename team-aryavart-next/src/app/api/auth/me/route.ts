import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { findUserById } from '@/lib/db';

export async function GET(request: NextRequest) {
    const session = await getSession();

    if (!session) {
        return NextResponse.json({ user: null });
    }

    // Fetch fresh user data from DB
    const user = await findUserById(session.userId);

    if (!user) {
        return NextResponse.json({ user: null });
    }

    return NextResponse.json({ user: { ...user, passwordHash: undefined } });
}
