import React, { useState } from 'react';
const ProgressBar = ({ progress, color = "#172B4DD9" }) => {
    const containerStyles = {
      width: "100%",
      backgroundColor: "white",
      borderRadius: "5px",
      height: "5px",
      position:'absolute',
      left:'0',
      bottom:0,
    };
  
    const fillerStyles = {
      width: `${progress}%`,
      backgroundColor: color,
      height: "100%",
      borderRadius: "5px",
      transition: "width 0.3s ease-in-out", // Optional animation for smooth transition
    };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    );
  };

const Part = ({ part }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const Type = (item_type)=>{
        if(item_type==='Video')return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6693 14.8907L15.4067 12.048C15.2057 11.9139 14.972 11.8369 14.7307 11.8253C14.4893 11.8137 14.2494 11.8679 14.0365 11.9821C13.8235 12.0963 13.6456 12.2662 13.5218 12.4737C13.398 12.6812 13.3328 12.9184 13.3333 13.16V18.844C13.3333 19.0854 13.3988 19.3223 13.5228 19.5293C13.6469 19.7364 13.8248 19.9059 14.0376 20.0198C14.2505 20.1337 14.4902 20.1877 14.7314 20.176C14.9725 20.1642 15.2059 20.0873 15.4067 19.9533L19.6693 17.1107C19.8519 16.9889 20.0017 16.8239 20.1052 16.6304C20.2088 16.4369 20.263 16.2208 20.263 16.0013C20.263 15.7818 20.2088 15.5658 20.1052 15.3722C20.0017 15.1787 19.8519 15.0124 19.6693 14.8907Z" stroke="url(#paint0_linear_1_138)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="url(#paint1_linear_1_138)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_1_138" x1="13.8747" y1="11.8238" x2="19.5592" y2="11.8238" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3467AE"/>
        <stop offset="1" stop-color="#0C4969"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_138" x1="5.87499" y1="4" x2="25.5625" y2="4" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3467AE"/>
        <stop offset="1" stop-color="#0C4969"/>
        </linearGradient>
        </defs>
        </svg>;

        else if(item_type==='Article' || item_type==='Quiz')return <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.97067 9C8.70267 7.44667 10.6773 6.33333 13 6.33333C15.9467 6.33333 18.3333 8.124 18.3333 10.3333C18.3333 12.2 16.6293 13.7667 14.3253 14.2093C13.6027 14.348 13 14.9293 13 15.6667M13 19.6667H13.0133M25 13C25 14.5759 24.6896 16.1363 24.0866 17.5922C23.4835 19.0481 22.5996 20.371 21.4853 21.4853C20.371 22.5996 19.0481 23.4835 17.5922 24.0866C16.1363 24.6896 14.5759 25 13 25C11.4241 25 9.86371 24.6896 8.4078 24.0866C6.95189 23.4835 5.62902 22.5996 4.51472 21.4853C3.40042 20.371 2.5165 19.0481 1.91345 17.5922C1.31039 16.1363 1 14.5759 1 13C1 9.8174 2.26428 6.76516 4.51472 4.51472C6.76516 2.26428 9.8174 1 13 1C16.1826 1 19.2348 2.26428 21.4853 4.51472C23.7357 6.76516 25 9.8174 25 13Z" stroke="url(#paint0_linear_1_128)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_1_128" x1="2.87499" y1="1" x2="22.5625" y2="1" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3467AE"/>
        <stop offset="1" stop-color="#0C4969"/>
        </linearGradient>
        </defs>
        </svg>
        else if(item_type==='Code')return <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3333 22.6667L17.6667 1.33334M23 6.66667L28.3333 12L23 17.3333M7 17.3333L1.66666 12L7 6.66667" stroke="url(#paint0_linear_1_162)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_1_162" x1="3.74998" y1="1.33334" x2="25.625" y2="1.33334" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3467AE"/>
        <stop offset="1" stop-color="#0C4969"/>
        </linearGradient>
        </defs>
        </svg>
        
        else if(item_type==='Resource') return <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 6.33333V17C6.66667 17.7072 6.94762 18.3855 7.44772 18.8856C7.94782 19.3857 8.62609 19.6667 9.33334 19.6667H17.3333M6.66667 6.33333V3.66667C6.66667 2.95942 6.94762 2.28115 7.44772 1.78105C7.94782 1.28095 8.62609 1 9.33334 1H15.448C15.8016 1.00008 16.1407 1.1406 16.3907 1.39067L22.276 7.276C22.5261 7.52599 22.6666 7.86507 22.6667 8.21867V17C22.6667 17.7072 22.3857 18.3855 21.8856 18.8856C21.3855 19.3857 20.7072 19.6667 20 19.6667H17.3333M6.66667 6.33333H4C3.29276 6.33333 2.61448 6.61428 2.11438 7.11438C1.61429 7.61448 1.33334 8.29276 1.33334 9V22.3333C1.33334 23.0406 1.61429 23.7189 2.11438 24.219C2.61448 24.719 3.29276 25 4 25H14.6667C15.3739 25 16.0522 24.719 16.5523 24.219C17.0524 23.7189 17.3333 23.0406 17.3333 22.3333V19.6667" stroke="url(#paint0_linear_1_173)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_1_173" x1="2.99999" y1="1" x2="20.5" y2="1" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3467AE"/>
        <stop offset="1" stop-color="#0C4969"/>
        </linearGradient>
        </defs>
        </svg>
        
                
    }
    return (
        <div className="bg-white shadow-md rounded-lg mb-4" style={{border:'1px solid #bef0f9',padding:"10px 10px 0 10px",position:'relative',overflowY:'hidden'}}>
            <p>PART-{part.id}</p>
            <div className="part-header flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-semibold text-gray-700">{part.title}</h3>
                
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 9V15L19.5 19.5M28.5 15C28.5 16.7728 28.1508 18.5283 27.4724 20.1662C26.7939 21.8041 25.7995 23.2923 24.5459 24.5459C23.2923 25.7995 21.8041 26.7939 20.1662 27.4724C18.5283 28.1508 16.7728 28.5 15 28.5C13.2272 28.5 11.4717 28.1508 9.83377 27.4724C8.19588 26.7939 6.70765 25.7995 5.45406 24.5459C4.20047 23.2923 3.20606 21.8041 2.52763 20.1662C1.84919 18.5283 1.5 16.7728 1.5 15C1.5 11.4196 2.92232 7.9858 5.45406 5.45406C7.9858 2.92232 11.4196 1.5 15 1.5C18.5804 1.5 22.0142 2.92232 24.5459 5.45406C27.0777 7.9858 28.5 11.4196 28.5 15Z" stroke="url(#paint0_linear_1_183)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1_183" x1="3.60936" y1="1.5" x2="25.7578" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#3467AE"/>
<stop offset="1" stop-color="#0C4969"/>
</linearGradient>
</defs>
</svg>

                        {part.time}
                    </span>
                    <span className="flex items-center gap-1">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 25.5V16.5C10.5 15.7044 10.1839 14.9413 9.62132 14.3787C9.05871 13.8161 8.29565 13.5 7.5 13.5H4.5C3.70435 13.5 2.94129 13.8161 2.37868 14.3787C1.81607 14.9413 1.5 15.7044 1.5 16.5V25.5C1.5 26.2956 1.81607 27.0587 2.37868 27.6213C2.94129 28.1839 3.70435 28.5 4.5 28.5H7.5C8.29565 28.5 9.05871 28.1839 9.62132 27.6213C10.1839 27.0587 10.5 26.2956 10.5 25.5ZM10.5 25.5V10.5C10.5 9.70435 10.8161 8.94129 11.3787 8.37868C11.9413 7.81607 12.7044 7.5 13.5 7.5H16.5C17.2956 7.5 18.0587 7.81607 18.6213 8.37868C19.1839 8.94129 19.5 9.70435 19.5 10.5V25.5M10.5 25.5C10.5 26.2956 10.8161 27.0587 11.3787 27.6213C11.9413 28.1839 12.7044 28.5 13.5 28.5H16.5C17.2956 28.5 18.0587 28.1839 18.6213 27.6213C19.1839 27.0587 19.5 26.2956 19.5 25.5M19.5 25.5V4.5C19.5 3.70435 19.8161 2.94129 20.3787 2.37868C20.9413 1.81607 21.7044 1.5 22.5 1.5H25.5C26.2956 1.5 27.0587 1.81607 27.6213 2.37868C28.1839 2.94129 28.5 3.70435 28.5 4.5V25.5C28.5 26.2956 28.1839 27.0587 27.6213 27.6213C27.0587 28.1839 26.2956 28.5 25.5 28.5H22.5C21.7044 28.5 20.9413 28.1839 20.3787 27.6213C19.8161 27.0587 19.5 26.2956 19.5 25.5Z" stroke="url(#paint0_linear_1_242)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1_242" x1="3.60936" y1="1.5" x2="25.7578" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#3467AE"/>
<stop offset="1" stop-color="#0C4969"/>
</linearGradient>
</defs>
</svg>

                        {part.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7.5V19.5C7 20.2956 7.31607 21.0587 7.87868 21.6213C8.44129 22.1839 9.20435 22.5 10 22.5H19M7 7.5V4.5C7 3.70435 7.31607 2.94129 7.87868 2.37868C8.44129 1.81607 9.20435 1.5 10 1.5H16.879C17.2768 1.50008 17.6583 1.65818 17.9395 1.9395L24.5605 8.5605C24.8418 8.84174 24.9999 9.22321 25 9.621V19.5C25 20.2956 24.6839 21.0587 24.1213 21.6213C23.5587 22.1839 22.7956 22.5 22 22.5H19M7 7.5H4C3.20435 7.5 2.44129 7.81607 1.87868 8.37868C1.31607 8.94129 1 9.70435 1 10.5V25.5C1 26.2956 1.31607 27.0587 1.87868 27.6213C2.44129 28.1839 3.20435 28.5 4 28.5H16C16.7956 28.5 17.5587 28.1839 18.1213 27.6213C18.6839 27.0587 19 26.2956 19 25.5V22.5" stroke="url(#paint0_linear_1_187)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1_187" x1="2.87499" y1="1.5" x2="22.5625" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#3467AE"/>
<stop offset="1" stop-color="#0C4969"/>
</linearGradient>
</defs>
</svg>

                        {5} Completed
                    </span>
                    <button onClick={toggleOpen} className="text-gray-500 text-sm">
                    {!isOpen ? <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.79709 2.42258L2.79714 2.42253C3.47842 1.86317 4.10151 1.35498 4.55643 0.986932C4.72889 0.847404 4.87666 0.72844 4.99402 0.634654C5.01797 0.653921 5.04328 0.674302 5.06991 0.695774C5.31345 0.89215 5.66391 1.17666 6.09558 1.52836C6.95873 2.23159 8.14458 3.20184 9.44475 4.26926L14.1736 8.15174L14.4909 8.41223L14.8082 8.15173L19.537 4.26908C20.8371 3.20165 22.023 2.23141 22.8862 1.52818C23.3179 1.17649 23.6683 0.891991 23.9119 0.695626C23.9386 0.674135 23.9639 0.653738 23.9879 0.634457C24.1059 0.728748 24.2546 0.848492 24.4283 0.989007C24.8849 1.35844 25.5102 1.86853 26.1939 2.42996L26.1939 2.42996L28.2121 4.08707L14.4907 15.3531L7.56262 9.66476L7.24534 10.0512L7.56261 9.66475C5.57019 8.02896 3.75903 6.54019 2.44604 5.45938C1.78951 4.91894 1.25771 4.48063 0.890121 4.17698C0.851307 4.14492 0.814339 4.11437 0.77926 4.08537C0.859609 4.01871 0.949247 3.94447 1.04708 3.86356C1.49593 3.49233 2.1154 2.98211 2.79709 2.42258Z" fill="#17384D" stroke="white"/>
</svg>
 : <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.79709 13.5774L2.79714 13.5775C3.47842 14.1368 4.10151 14.645 4.55643 15.0131C4.72889 15.1526 4.87666 15.2716 4.99402 15.3653C5.01797 15.3461 5.04328 15.3257 5.06991 15.3042C5.31345 15.1079 5.66391 14.8233 6.09558 14.4716C6.95873 13.7684 8.14458 12.7982 9.44475 11.7307L14.1736 7.84826L14.4909 7.58777L14.8082 7.84827L19.537 11.7309C20.8371 12.7984 22.023 13.7686 22.8862 14.4718C23.3179 14.8235 23.6683 15.108 23.9119 15.3044C23.9386 15.3259 23.9639 15.3463 23.9879 15.3655C24.1059 15.2713 24.2546 15.1515 24.4283 15.011C24.8849 14.6416 25.5102 14.1315 26.1939 13.57L26.1939 13.57L28.2121 11.9129L14.4907 0.646939L7.56262 6.33524L7.24534 5.94881L7.56261 6.33525C5.57019 7.97104 3.75903 9.45981 2.44604 10.5406C1.78951 11.0811 1.25771 11.5194 0.890121 11.823C0.851307 11.8551 0.814339 11.8856 0.77926 11.9146C0.859609 11.9813 0.949247 12.0555 1.04708 12.1364C1.49593 12.5077 2.1154 13.0179 2.79709 13.5774Z" fill="#17384D" stroke="white"/>
</svg>
}
                </button>
                </div>
            </div>
                <p className='px-1 bg-[#EFF5FF] rounded-md my-4' style={{marginLeft:'auto',width:'max-content',fontSize:'12px'}}>{part.completion}% completed</p>
            

            {isOpen && <div className="item-list space-y-3">
                {part.items.map((item) => (
                    <div key={item.id} className="item flex justify-between items-center p-5 bg-gray-50 rounded-md">
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="capitalize font-medium">{Type(item.type)}</span> {item.title}
                        </div>
                        <span className="text-gray-500 text-sm flex justify-center items-center"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'7px'}}>
<path d="M15 9V15L19.5 19.5M28.5 15C28.5 16.7728 28.1508 18.5283 27.4724 20.1662C26.7939 21.8041 25.7995 23.2923 24.5459 24.5459C23.2923 25.7995 21.8041 26.7939 20.1662 27.4724C18.5283 28.1508 16.7728 28.5 15 28.5C13.2272 28.5 11.4717 28.1508 9.83377 27.4724C8.19588 26.7939 6.70765 25.7995 5.45406 24.5459C4.20047 23.2923 3.20606 21.8041 2.52763 20.1662C1.84919 18.5283 1.5 16.7728 1.5 15C1.5 11.4196 2.92232 7.9858 5.45406 5.45406C7.9858 2.92232 11.4196 1.5 15 1.5C18.5804 1.5 22.0142 2.92232 24.5459 5.45406C27.0777 7.9858 28.5 11.4196 28.5 15Z" stroke="url(#paint0_linear_1_183)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1_183" x1="3.60936" y1="1.5" x2="25.7578" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#3467AE"/>
<stop offset="1" stop-color="#0C4969"/>
</linearGradient>
</defs>
</svg>
{item.duration}</span>
                    </div>
                ))}
            </div>}
            <ProgressBar progress={part.completion}/>
        </div>
    );
};

export default Part;
