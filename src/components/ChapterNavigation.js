import React from 'react';

const ChapterNavigation = () => {
    const chapters = [
        { id: 1, title: 'Chapter 1', time: '05:00:00' },
        { id: 2, title: 'Chapter 2', time: '00:00:00' },
        { id: 3, title: 'Chapter 3', time: '00:00:00' },
        { id: 4, title: 'Chapter 4', time: '00:00:00' },
        { id: 5, title: 'Chapter 5', time: '00:00:00' },
    ];

    return (
        <div className="chapter-navigation bg-gray-100 p-4 rounded-lg shadow-md  space-y-2">
            {chapters.map((chapter) => (
                <div
                key={chapter.id}
                className={`chapter flex justify-between items-center p-2 rounded-lg ${
                    chapter.id === 1 ? 'text-black bg-[#EFF5FF]' : 'hover:bg-gray-200'
                }`}
                style={{ width: '200px' }}
            >
            
                    <span className="font-medium">{chapter.title}</span>
                    <span className="text-sm flex justify-center items-center"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'7px'}}>
<path d="M15 9V15L19.5 19.5M28.5 15C28.5 16.7728 28.1508 18.5283 27.4724 20.1662C26.7939 21.8041 25.7995 23.2923 24.5459 24.5459C23.2923 25.7995 21.8041 26.7939 20.1662 27.4724C18.5283 28.1508 16.7728 28.5 15 28.5C13.2272 28.5 11.4717 28.1508 9.83377 27.4724C8.19588 26.7939 6.70765 25.7995 5.45406 24.5459C4.20047 23.2923 3.20606 21.8041 2.52763 20.1662C1.84919 18.5283 1.5 16.7728 1.5 15C1.5 11.4196 2.92232 7.9858 5.45406 5.45406C7.9858 2.92232 11.4196 1.5 15 1.5C18.5804 1.5 22.0142 2.92232 24.5459 5.45406C27.0777 7.9858 28.5 11.4196 28.5 15Z" stroke="url(#paint0_linear_1_183)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1_183" x1="3.60936" y1="1.5" x2="25.7578" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#3467AE"/>
<stop offset="1" stop-color="#0C4969"/>
</linearGradient>
</defs>
</svg>
{chapter.time}</span>
                </div>
            ))}
        </div>
    );
};

export default ChapterNavigation;
