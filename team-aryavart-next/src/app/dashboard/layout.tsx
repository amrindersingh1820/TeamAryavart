'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    Calendar,
    CheckSquare,
    User,
    LogOut,
    Menu,
    X,
    Bell,
    BookOpen
} from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [showNotifications, setShowNotifications] = useState(false);

    // Fetch user session on client side just for UI display
    useEffect(() => {
        fetch('/api/auth/me')
            .then(res => res.json())
            .then(data => {
                if (data.user) setUser(data.user);
            });
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/join');
        router.refresh();
    };

    const navItems = [
        { name: 'Overview', path: '/dashboard/student', icon: <LayoutDashboard size={20} /> },
        { name: 'Events', path: '/dashboard/student/events', icon: <Calendar size={20} /> },
        { name: 'Tasks', path: '/dashboard/student/tasks', icon: <CheckSquare size={20} /> },
        { name: 'Resources', path: '/dashboard/student/resources', icon: <BookOpen size={20} /> },
        { name: 'Profile', path: '/dashboard/student/profile', icon: <User size={20} /> },
    ];

    const notifications = [
        { id: 1, title: 'Hackathon Registration', time: '2 hrs ago', type: 'alert' },
        { id: 2, title: 'Workshop: React Basics', time: '5 hrs ago', type: 'info' },
        { id: 3, title: 'Profile Approved', time: '1 day ago', type: 'success' },
    ];

    if (!user) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:transform-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between lg:justify-center">
                        <span className="text-xl font-bold tracking-widest text-[var(--color-primary)] uppercase">
                            ARYAVART
                        </span>
                        <button
                            className="lg:hidden text-gray-500"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${pathname === item.path
                                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile Footer */}
                    <div className="p-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 mb-4 px-2">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center font-bold">
                                {user.fullName[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">{user.fullName}</p>
                                <p className="text-xs text-gray-500 truncate capitalize">{user.role}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-red-100 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                        >
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-center px-6 lg:px-10">
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                        <button
                            className="lg:hidden text-gray-500 p-2 -ml-2"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>

                        <h1 className="text-xl font-bold text-gray-800 hidden md:block">
                            Dashboard
                        </h1>

                        <div className="flex items-center gap-4 relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <Bell size={20} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            </button>

                            {/* Notifications Dropdown */}
                            {showNotifications && (
                                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-50 flex justify-between items-center">
                                        <span className="font-semibold text-sm">Notifications</span>
                                        <button className="text-xs text-[var(--color-primary)]">Mark all read</button>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {notifications.map(n => (
                                            <div key={n.id} className="px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 cursor-pointer">
                                                <p className="text-sm font-medium text-gray-800">{n.title}</p>
                                                <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-4 py-2 text-center border-t border-gray-50">
                                        <button className="text-xs font-medium text-gray-500 hover:text-gray-900">View all</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50">
                    <div className="max-w-7xl mx-auto w-full p-6 lg:p-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
