'use client';

import { Calendar, MapPin } from 'lucide-react';

export default function EventsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">My Events</h1>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Browse All Events</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-48 h-32 bg-gray-200 rounded-xl flex-shrink-0"></div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-[var(--color-secondary)] uppercase bg-blue-50 px-2 py-1 rounded">Workshop</span>
                                <span className="text-xs text-gray-400">Oct 24, 2025</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced React Patterns</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                <MapPin size={16} /> Seminar Hall A
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 py-2 text-sm font-semibold text-[var(--color-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
