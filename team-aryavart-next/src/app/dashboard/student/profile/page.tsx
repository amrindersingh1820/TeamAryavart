'use client';

import { useEffect, useState } from 'react';
import { User, Mail, Hash, Book, Calendar } from 'lucide-react';

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        fetch('/api/auth/me').then(res => res.json()).then(data => setUser(data.user));
    }, []);

    if (!user) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8 border-b border-gray-100 pb-8">
                    <div className="w-24 h-24 rounded-full bg-[var(--color-secondary)] text-white text-4xl font-bold flex items-center justify-center">
                        {user.fullName[0]}
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-900">{user.fullName}</h2>
                        <p className="text-gray-500">{user.email}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide">
                            {user.role}
                        </span>
                    </div>
                    <div className="md:ml-auto">
                        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Academic Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Hash size={18} className="text-gray-400" />
                                <span className="font-medium">Student ID:</span> {user.studentId}
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Book size={18} className="text-gray-400" />
                                <span className="font-medium">Department:</span> {user.department}
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Calendar size={18} className="text-gray-400" />
                                <span className="font-medium">Year:</span> {user.year}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Club Status</h3>
                        <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Join Date</span>
                                <span className="font-medium text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Membership Status</span>
                                <span className="font-bold text-green-600 uppercase">{user.status}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
