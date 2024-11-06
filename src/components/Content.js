import React from 'react';
import Part from './Part';

const Content = () => {
    const parts = [
        {
            id: 1,
            title: 'Lorem Ipsum Dolor Sit Amet',
            time: '02:00:00',
            difficulty: 'Medium',
            completion: 45,
            items: [
                { id: 1, type: 'Video', title: 'Video 1', duration: '10:00' },
                { id: 2, type: 'Article', title: 'Article 1', duration: '10:00' },
                { id: 3, type: 'Quiz', title: 'Quiz 1', duration: '10:00' },
                { id: 4, type: 'Code', title: 'Coding Exercise 1', duration: '10:00' },
                { id: 5, type: 'Resource', title: 'Combined Resource 1', duration: '10:00' },
            ],
        },
        {
            id: 2,
            title: 'Lorem Ipsum Dolor Sit Amet',
            time: '02:00:00',
            difficulty: 'Medium',
            completion: 35,
            items: [
                { id: 1, type: 'Video', title: 'Video 1', duration: '10:00' },
                { id: 2, type: 'Article', title: 'Article 1', duration: '10:00' },
                { id: 3, type: 'Quiz', title: 'Quiz 1', duration: '10:00' },
                { id: 4, type: 'Code', title: 'Coding Exercise 1', duration: '10:00' },
                { id: 5, type: 'Resource', title: 'Combined Resource 1', duration: '10:00' },
            ],
        },
        {
            id: 3,
            title: 'Lorem Ipsum Dolor Sit Amet',
            time: '02:00:00',
            difficulty: 'Medium',
            completion: 85,
            items: [
                { id: 1, type: 'Video', title: 'Video 1', duration: '10:00' },
                { id: 2, type: 'Article', title: 'Article 1', duration: '10:00' },
                { id: 3, type: 'Quiz', title: 'Quiz 1', duration: '10:00' },
                { id: 4, type: 'Code', title: 'Coding Exercise 1', duration: '10:00' },
                { id: 5, type: 'Resource', title: 'Combined Resource 1', duration: '10:00' },
            ],
        },
        // Add more parts if needed
    ];

    return (
        <div className="content bg-white  rounded-lg p-6 space-y-6">
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    );
};

export default Content;
