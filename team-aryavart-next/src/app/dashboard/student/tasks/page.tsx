'use client';

import { CheckCircle2, Circle, Clock } from 'lucide-react';

export default function TasksPage() {
    const tasks = [
        { id: 1, title: 'Complete Profile Documentation', status: 'completed', deadline: '2023-10-15' },
        { id: 2, title: 'Submit Workshop Feedback', status: 'pending', deadline: '2023-10-20' },
        { id: 3, title: 'Register for TechXclave', status: 'in-progress', deadline: '2023-10-25' },
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed': return <CheckCircle2 className="text-green-500" />;
            case 'in-progress': return <Clock className="text-yellow-500" />;
            default: return <Circle className="text-gray-300" />;
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Task</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Deadline</th>
                            <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {tasks.map((task) => (
                            <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-6">
                                    {getStatusIcon(task.status)}
                                </td>
                                <td className="py-4 px-6">
                                    <p className="font-medium text-gray-800">{task.title}</p>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="text-sm text-gray-500">{task.deadline}</span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button className="text-sm text-[var(--color-primary)] font-medium hover:underline">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
