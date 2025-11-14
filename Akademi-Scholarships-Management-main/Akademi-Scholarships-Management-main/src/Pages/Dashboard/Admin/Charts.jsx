import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const loaderData = useLoaderData()
    const [scholarships, users, reviews, application] = loaderData
    const chartData = [
        { name: 'Scholarships', count: scholarships.length },
        { name: 'Users', count: users.length },
        { name: 'Applications', count: application.length },
        { name: 'Reviews', count: reviews.length },
    ];
    return (
        <div className='flex items-center justify-center bg-[#f2f8f1] h-full flex-col gap-10 py-14'>
            <h2 className='text-3xl text-center font-bold'>A brief analytics of the application data</h2>
            <div className="charts" style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" barSize={30} fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;