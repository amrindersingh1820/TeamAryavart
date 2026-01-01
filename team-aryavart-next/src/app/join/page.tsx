'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Join() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [signupData, setSignupData] = useState({
        fullName: '',
        studentId: '',
        department: 'Computer Science', // default
        year: '1st Year', // default
        email: '',
        password: '',
    });

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
        const payload = isLogin ? loginData : signupData;

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                // If it's a validation error, just show the first one or a generic message
                if (data.errors) {
                    const firstError = Object.values(data.errors).flat()[0] as string;
                    throw new Error(firstError || 'Validation failed');
                }
                throw new Error(data.message || 'Authentication failed');
            }

            // Success
            router.push('/dashboard/student');
            router.refresh(); // Refresh to update session state in middleware/layout used elsewhere
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pb-20 min-h-screen bg-gray-50">
            <section className="bg-[var(--color-secondary)] text-white py-20 text-center relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[var(--color-primary)] rounded-full blur-[100px] opacity-20"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        {isLogin ? 'Student Login' : 'Join Team Aryavart'}
                    </motion.h1>
                    <p className="text-xl text-gray-300">
                        {isLogin
                            ? 'Welcome back! Access your dashboard.'
                            : 'Be a part of the change. Start your journey today.'}
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-8 md:p-12">
                        {/* Toggle */}
                        <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                            <button
                                onClick={() => { setIsLogin(true); setError(null); }}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${isLogin ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => { setIsLogin(false); setError(null); }}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!isLogin ? 'bg-white text-[var(--color-secondary)] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Register
                            </button>
                        </div>

                        {error && (
                            <div className="mb-6 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <AnimatePresence mode="wait">
                                {isLogin ? (
                                    <motion.div
                                        key="login"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={loginData.email}
                                                onChange={handleLoginChange}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={loginData.password}
                                                onChange={handleLoginChange}
                                                placeholder="••••••••"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="signup"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={signupData.fullName}
                                                onChange={handleSignupChange}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-600">Student ID</label>
                                                <input
                                                    type="text"
                                                    name="studentId"
                                                    value={signupData.studentId}
                                                    onChange={handleSignupChange}
                                                    placeholder="12345678"
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-600">Year</label>
                                                <select
                                                    name="year"
                                                    value={signupData.year}
                                                    onChange={handleSignupChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                >
                                                    <option>1st Year</option>
                                                    <option>2nd Year</option>
                                                    <option>3rd Year</option>
                                                    <option>4th Year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600">Department</label>
                                            <select
                                                name="department"
                                                value={signupData.department}
                                                onChange={handleSignupChange}
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                            >
                                                <option>Computer Science</option>
                                                <option>Information Technology</option>
                                                <option>Electronics</option>
                                                <option>Mechanical</option>
                                                <option>Civil</option>
                                                <option>Business Admin</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={signupData.email}
                                                onChange={handleSignupChange}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={signupData.password}
                                                onChange={handleSignupChange}
                                                placeholder="••••••••"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                                                required
                                                minLength={6}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> Processing...
                                    </>
                                ) : (
                                    <>
                                        {isLogin ? 'Login to Dashboard' : 'Create Account'} <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
