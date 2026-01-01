'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Calendar, Clock, TrendingUp, AlertCircle, ChevronRight, CheckCircle, Plus, Info, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StudentDashboard() {
    const [user, setUser] = useState<any>(null);
    const [selectedStat, setSelectedStat] = useState<any>(null);
    const [announcementFilter, setAnnouncementFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/auth/me')
            .then(res => res.json())
            .then(data => {
                setUser(data.user);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);

    // Mock Data for "Alive" feel
    const pendingTasks = [
        { id: 1, title: 'Upload Student ID', deadline: 'Today', urgent: true },
        { id: 2, title: 'Complete Profile Bio', deadline: 'Tomorrow', urgent: false },
    ];

    const upcomingEVENTS = [
        { id: 1, title: 'Team Meeting', time: 'Today, 2:00 PM', type: 'Meeting' },
        { id: 2, title: 'React Workshop', time: 'Tomorrow, 10:00 AM', type: 'Workshop' },
        { id: 3, title: 'Project Submission', time: 'Fri, 11:59 PM', type: 'Deadline' },
    ];

    const announcements = [
        { id: 1, title: 'Upcoming Hackathon Registration', time: '2 hours ago', type: 'Important', content: 'Registration for the annual TechXclave Hackathon is now open. Make sure to form your teams and submit your ideas before the deadline.' },
        { id: 2, title: 'Workshop Schedule Change', time: '5 hours ago', type: 'Event', content: 'The React Workshop has been rescheduled to 10:00 AM tomorrow due to venue availability.' },
        { id: 3, title: 'New Resources Added', time: '1 day ago', type: 'General', content: 'Check out the new design resources added to the library.' },
    ];

    const stats = [
        {
            label: 'Events Attended',
            value: user?.participationCount || 0,
            icon: <Calendar className="text-blue-500" />,
            change: '+2 this month',
            detail: 'You attended "Intro to AI" and "Web Dev Bootcamp" this month.'
        },
        {
            label: 'Points Earned',
            value: '120',
            icon: <Award className="text-yellow-500" />,
            change: 'Top 10%',
            detail: ' earned from workshops (80) and volunteering (40).'
        },
        {
            label: 'Pending Tasks',
            value: pendingTasks.length,
            icon: <Clock className="text-orange-500" />,
            change: 'Due soon',
            detail: 'Finish your profile setup to unlock all features.'
        },
        {
            label: 'Workshops',
            value: '5',
            icon: <BookOpen className="text-green-500" />,
            change: 'Completed',
            detail: 'You have completed 5 advanced technical workshops.'
        },
    ];

    const addToCalendar = (title: string) => {
        alert(`Added "${title}" to your calendar!`);
    };

    if (isLoading || !user) {
        return (
            <div className="space-y-8 animate-pulse">
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>)}
                </div>
            </div>
        );
    }

    // Filter Announcements
    const filteredAnnouncements = announcementFilter === 'All'
        ? announcements
        : announcements.filter(a => a.type === announcementFilter);

    return (
        <div className="space-y-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Main Content (70%) */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Welcome & Status Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Hello, {user.fullName.split(' ')[0]}! 👋</h1>
                            <p className="text-gray-500">Here's what's happening today in Team Aryavart.</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm cursor-help hover:shadow-md transition-shadow group relative">
                                <TrendingUp size={16} className="text-[var(--color-primary)]" />
                                <span className="text-sm font-medium text-gray-600">Membership Status:</span>
                                <span className={`text-sm font-bold uppercase ${user.status === 'approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                                    {user.status}
                                </span>

                                {/* Tooltip for Status */}
                                <div className="absolute right-0 top-full mt-2 w-64 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-50 hidden group-hover:block">
                                    <h4 className="font-bold text-gray-800 mb-1">Status: {user.status}</h4>
                                    <p className="text-xs text-gray-500">
                                        {user.status === 'pending'
                                            ? 'Your application is under review. Approval usually takes 24-48 hours.'
                                            : 'You are a fully verified member.'}
                                    </p>
                                    {user.status === 'pending' && (
                                        <div className="mt-2 text-xs font-semibold text-[var(--color-primary)]">
                                            Next: Complete your profile
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid (Interactive Point 3) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedStat(stat)}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 bg-gray-50 rounded-lg">
                                        {stat.icon}
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{stat.change}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recent Announcements (Enhanced Point 4) */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">Latest Announcements</h2>
                            <div className="flex gap-2">
                                {['All', 'Important', 'Event'].map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setAnnouncementFilter(f)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${announcementFilter === f ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-[300px]">
                            {filteredAnnouncements.length > 0 ? filteredAnnouncements.map((item) => (
                                <div key={item.id} className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
                                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${item.type === 'Important' ? 'bg-red-50 text-red-500' :
                                                item.type === 'Event' ? 'bg-blue-50 text-blue-500' : 'bg-gray-100 text-gray-500'
                                                }`}>{item.type}</span>
                                        </div>
                                        <span className="text-xs text-gray-400">{item.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {item.content}
                                    </p>
                                </div>
                            )) : (
                                <div className="p-10 text-center text-gray-400">No announcements found.</div>
                            )}
                            <div className="p-4 text-center border-t border-gray-50">
                                <button className="text-sm text-[var(--color-primary)] font-semibold hover:underline">View All Announcements</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar (30%) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* NEW: Primary Action Section (Point 1) */}
                    {user.status === 'pending' && (
                        <div className="bg-white p-6 rounded-2xl border border-yellow-100 shadow-sm flex items-center justify-between relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <AlertCircle size={20} className="text-yellow-500" />
                                    Complete Your Application
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">Upload your student ID and verify email to get approved.</p>
                            </div>
                            <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-sm hover:bg-yellow-600 transition-colors text-sm">
                                Complete Profile
                            </button>
                        </div>
                    )}

                    {/* Upcoming Schedule (Enhanced Point 5) */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-800">Your Schedule</h2>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <div className="space-y-6">
                                {upcomingEVENTS.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 group">
                                        <div className="flex-col items-center justify-center w-12 text-center rounded-lg bg-gray-50 py-1 hidden sm:flex group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                                            <span className="text-xs font-bold uppercase transition-colors">{item.time.split(' ')[0]}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-sm font-semibold transition-colors ${item.type === 'Deadline' ? 'text-red-600' : 'text-gray-800'}`}>{item.title}</h4>
                                            <p className="text-xs text-gray-500">{item.time}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${item.type === 'Deadline' ? 'border-red-100 text-red-500 bg-red-50' : 'border-gray-200 text-gray-400'
                                                }`}>
                                                {item.type}
                                            </span>
                                            <button
                                                onClick={() => addToCalendar(item.title)}
                                                className="text-[10px] text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                                            >
                                                + Add to Cal
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Personalization / Task Recommendation (Point 6) */}
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Award size={80} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Recommended for You</h3>
                        <p className="text-indigo-100 text-sm mb-4">Based on your interest in "Web Development", we recommend:</p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-3">
                            <h4 className="font-semibold text-sm">Advanced React Patterns</h4>
                            <p className="text-xs text-indigo-100">Workshop • Tomorrow • +50 Points</p>
                        </div>
                        <button className="w-full py-2 bg-white text-indigo-600 rounded-lg text-sm font-bold shadow-sm hover:bg-indigo-50 transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Stat Details Modal (Interaction Overlay) */}
            <AnimatePresence>
                {selectedStat && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedStat(null)}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent close on click inside
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        {selectedStat.icon}
                                    </div>
                                    <button onClick={() => setSelectedStat(null)} className="text-gray-400 hover:text-gray-600">
                                        <X size={20} />
                                    </button>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-1">{selectedStat.value}</h3>
                                <p className="text-gray-500 font-medium mb-4">{selectedStat.label}</p>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-sm text-gray-600">{selectedStat.detail}</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                                <button className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                                    View Detailed Report
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
