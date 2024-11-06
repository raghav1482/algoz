import React, { useState } from 'react';

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('Learning Material');
    return (
        <div className="flex items-center justify-between bg-white  rounded-lg p-4 mb-4">
            <div className="flex gap-4" style={{ boxShadow: '#EFF5FF 0px 30px 60px -12px inset, #EFF5FF00 0px 18px 36px -18px inset' , borderRadius:'10px',padding:'10px'}}>

            <button
    onClick={() => setActiveTab('Mentor Sessions')}
    className={`px-4 py-2 flex items-center rounded-lg text-sm font-medium ${
        activeTab === 'Mentor Sessions'
            ? 'bg-white text-black'
            : 'bg-[#0000] text-gray-600 hover:bg-gray-100'
    }`}
    style={{
        boxShadow:
            activeTab === 'Mentor Sessions'
                ? 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                : 'none',
    }}
>

                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" style={{marginRight:'10px'}} xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 9.83333V4.5M21.3334 9.83333V4.5M9.33336 15.1667H22.6667M6.6667 28.5H25.3334C26.0406 28.5 26.7189 28.219 27.219 27.719C27.7191 27.2189 28 26.5406 28 25.8333V9.83333C28 9.12609 27.7191 8.44781 27.219 7.94772C26.7189 7.44762 26.0406 7.16667 25.3334 7.16667H6.6667C5.95945 7.16667 5.28118 7.44762 4.78108 7.94772C4.28098 8.44781 4.00003 9.12609 4.00003 9.83333V25.8333C4.00003 26.5406 4.28098 27.2189 4.78108 27.719C5.28118 28.219 5.95945 28.5 6.6667 28.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mentor Sessions
                </button>
                    <button
    onClick={() => setActiveTab('Learning Material')}
    className={`px-4 py-2 flex items-center rounded-lg text-sm font-medium ${
        activeTab === 'Learning Material'
            ? 'bg-white text-black'
            : 'bg-[#0000] text-gray-600 hover:bg-gray-100'
    }`}
    style={{
        boxShadow:
            activeTab === 'Learning Material'
                ? 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                : 'none',
    }}
>
                   <svg width="32" height="33" viewBox="0 0 32 33" fill="none" style={{marginRight:'10px'}} xmlns="http://www.w3.org/2000/svg">
<path d="M28 18.1734C24.1873 19.715 20.1126 20.505 16 20.5C11.756 20.5 7.7067 19.6734 4.00003 18.1734M21.3334 8.50002V5.83335C21.3334 5.12611 21.0524 4.44783 20.5523 3.94774C20.0522 3.44764 19.3739 3.16669 18.6667 3.16669H13.3334C12.6261 3.16669 11.9478 3.44764 11.4477 3.94774C10.9476 4.44783 10.6667 5.12611 10.6667 5.83335V8.50002M16 16.5H16.0134M6.6667 27.1667H25.3334C26.0406 27.1667 26.7189 26.8857 27.219 26.3856C27.7191 25.8855 28 25.2073 28 24.5V11.1667C28 10.4594 27.7191 9.78117 27.219 9.28107C26.7189 8.78097 26.0406 8.50002 25.3334 8.50002H6.6667C5.95945 8.50002 5.28118 8.78097 4.78108 9.28107C4.28098 9.78117 4.00003 10.4594 4.00003 11.1667V24.5C4.00003 25.2073 4.28098 25.8855 4.78108 26.3856C5.28118 26.8857 5.95945 27.1667 6.6667 27.1667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Learning Material
                </button>
            </div>
            <button className="text-sm font-medium text-blue-500 hover:underline flex items-center p-1" style={{border:'2px solid #EFF5FF',borderRadius:'10px'}}>
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'8px'}}>
<path d="M14.3333 18.8333H13V13.5H11.6667M13 8.16667H13.0133M25 13.5C25 15.0759 24.6896 16.6363 24.0866 18.0922C23.4835 19.5481 22.5996 20.871 21.4853 21.9853C20.371 23.0996 19.0481 23.9835 17.5922 24.5866C16.1363 25.1896 14.5759 25.5 13 25.5C11.4241 25.5 9.86371 25.1896 8.4078 24.5866C6.95189 23.9835 5.62902 23.0996 4.51472 21.9853C3.40042 20.871 2.5165 19.5481 1.91345 18.0922C1.31039 16.6363 1 15.0759 1 13.5C1 10.3174 2.26428 7.26516 4.51472 5.01472C6.76516 2.76428 9.8174 1.5 13 1.5C16.1826 1.5 19.2348 2.76428 21.4853 5.01472C23.7357 7.26516 25 10.3174 25 13.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p style={{color:'#2b2a77'}}>How it works</p>
            </button>
        </div>
    );
};

export default TabNavigation;
