export type UserRole = 'student' | 'admin' | 'volunteer' | 'member';
export type MembershipStatus = 'pending' | 'approved' | 'rejected';

export interface User {
    id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    studentId: string;
    department: string;
    year: string;
    role: UserRole;
    status: MembershipStatus;
    joinDate: string;
    participationCount: number;
}

// In-memory storage with default admin user
const users: User[] = [
    {
        id: "admin-id",
        email: "admin@aryavart.com",
        fullName: "Admin User",
        // Hash for "admin"
        passwordHash: "$2b$10$YnXpHOtEZHFGhJMGydFlC.G/LnrLfBRaqYeREjqwF.85diMqvZUcm",
        studentId: "ADMIN001",
        department: "Administration",
        year: "Staff",
        role: "admin",
        status: "approved",
        joinDate: "2024-01-01T00:00:00.000Z",
        participationCount: 0
    }
];

// Helper to find user by email
export const findUserByEmail = async (email: string) => {
    // Simulate async DB call
    return Promise.resolve(users.find(u => u.email === email) || null);
};

// Helper to create user
export const createUser = async (user: User) => {
    // Ensure unique email
    if (users.find(u => u.email === user.email)) {
        throw new Error('User already exists');
    }

    users.push(user);
    return Promise.resolve(user);
};

// Helper to find user by ID
export const findUserById = async (id: string) => {
    return Promise.resolve(users.find(u => u.id === id) || null);
};
