import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-white w-64 h-screen p-6 flex flex-col items-start">
            
            <svg width="144" height="28" viewBox="0 0 144 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5393 17.9234H6.19295L5.22882 20.8502H-0.00012207L6.52386 2.94287H12.2542L18.7525 20.8502H13.4963L12.5393 17.9234ZM9.36613 8.32511L7.46365 14.1113H11.2958L9.36613 8.32511Z" fill="#172B4D"/>
<path d="M20.38 2.05981H25.354V20.8554H20.38V2.05981Z" fill="#172B4D"/>
<path d="M33.4491 6.43446C34.2769 6.38491 35.1027 6.55909 35.84 6.9387C36.5773 7.31831 37.1989 7.88935 37.6394 8.59194V6.6035H42.6134V20.6902C42.6134 24.4965 40.5333 27.8531 35.4046 27.8531C30.9636 27.8531 28.2216 25.6197 27.8663 22.0926H32.7686C32.972 23.0052 33.8344 23.5381 35.1037 23.5381C36.4991 23.5381 37.6423 22.9049 37.6423 20.6959V18.8679C37.2018 19.5702 36.5804 20.141 35.8434 20.5206C35.1065 20.9002 34.2809 21.0745 33.4534 21.0254C30.0782 21.0254 27.3878 18.2591 27.3878 13.7192C27.3878 9.17931 30.0725 6.43446 33.4491 6.43446ZM35.0478 10.7738C34.677 10.7745 34.3105 10.854 33.9727 11.0072C33.6349 11.1604 33.3336 11.3837 33.0888 11.6623C32.844 11.9408 32.6613 12.2683 32.5527 12.623C32.4441 12.9776 32.4122 13.3513 32.4591 13.7192C32.5247 14.2169 32.7323 14.6851 33.0571 15.0679C33.3819 15.4507 33.8101 15.7317 34.2905 15.8774C34.7709 16.0231 35.2831 16.0273 35.7658 15.8894C36.2485 15.7515 36.6812 15.4774 37.0121 15.0999C37.3431 14.7225 37.5582 14.2576 37.6318 13.761C37.7054 13.2645 37.6343 12.7572 37.427 12.3C37.2198 11.8428 36.8852 11.455 36.4632 11.183C36.0412 10.9111 35.5498 10.7665 35.0478 10.7666V10.7738Z" fill="#172B4D"/>
<path d="M52.0773 21.0183C50.6427 20.9812 49.2508 20.5219 48.0757 19.6979C46.9007 18.8739 45.9946 17.7218 45.4709 16.3857C44.9471 15.0495 44.8289 13.5886 45.1309 12.1856C45.433 10.7826 46.1419 9.49975 47.1691 8.4975C48.1963 7.49525 49.4962 6.81805 50.9062 6.5506C52.3162 6.28314 53.7738 6.4373 55.0967 6.99378C56.4195 7.55026 57.549 8.48437 58.3439 9.67931C59.1387 10.8743 59.5636 12.277 59.5655 13.7122C59.6115 14.6995 59.4478 15.6853 59.0853 16.6048C58.7227 17.5243 58.1696 18.3566 57.4621 19.0468C56.7547 19.7371 55.909 20.2696 54.9809 20.6094C54.0528 20.9493 53.0632 21.0886 52.0773 21.0183ZM52.0773 16.7034C53.3466 16.7034 54.5128 15.7651 54.5128 13.7093C54.5128 11.6779 53.3667 10.7395 52.1103 10.7395C50.8539 10.7395 49.7236 11.6779 49.7236 13.7093C49.7164 15.7651 50.7823 16.7034 52.0773 16.7034Z" fill="#172B4D"/>
<path d="M74.4602 6.73412L67.025 16.8095H74.4602V20.8566H61.4408V17.0659L68.7985 6.9662H61.4408V2.95496H74.4602V6.73412Z" fill="#172B4D"/>
<path d="M83.5684 21.0187C81.6508 20.9919 79.8209 20.2113 78.4744 18.8458C77.1279 17.4803 76.373 15.6396 76.373 13.7219C76.373 11.8041 77.1279 9.96347 78.4744 8.59796C79.8209 7.23245 81.6508 6.45184 83.5684 6.42497C84.5242 6.35914 85.4831 6.49808 86.3809 6.83247C87.2788 7.16686 88.0949 7.68901 88.7748 8.36404C89.4547 9.03907 89.9827 9.85143 90.3236 10.7468C90.6644 11.6423 90.8103 12.6001 90.7513 13.5564C90.7514 13.9463 90.7261 14.3359 90.6754 14.7225H81.259C81.3607 16.3743 82.249 17.0319 83.3621 17.0319C83.7362 17.0457 84.1058 16.9465 84.4226 16.7472C84.7395 16.5479 84.989 16.2577 85.1385 15.9144H90.4391C90.0606 17.4284 89.1691 18.7644 87.9164 19.6951C86.6637 20.6257 85.1271 21.0935 83.5684 21.0187ZM81.2848 12.3086H85.6714C85.6728 12.0362 85.6172 11.7665 85.508 11.5169C85.3989 11.2673 85.2386 11.0434 85.0377 10.8594C84.8367 10.6755 84.5996 10.5357 84.3413 10.449C84.0831 10.3623 83.8095 10.3306 83.5383 10.356C82.9826 10.3271 82.4373 10.515 82.0173 10.8799C81.5973 11.2449 81.3352 11.7586 81.2862 12.3129L81.2848 12.3086Z" fill="#172B4D"/>
<path d="M102.48 13.2029C102.508 12.8756 102.468 12.546 102.362 12.235C102.256 11.9241 102.086 11.6386 101.864 11.3966C101.642 11.1546 101.372 10.9614 101.071 10.8292C100.77 10.697 100.445 10.6288 100.117 10.6288C99.7882 10.6288 99.4632 10.697 99.1624 10.8292C98.8616 10.9614 98.5915 11.1546 98.3693 11.3966C98.1471 11.6386 97.9776 11.9241 97.8714 12.235C97.7653 12.546 97.725 12.8756 97.753 13.2029V20.8501H92.7847V6.60301H97.7587V8.64015C98.2489 7.95163 98.9013 7.39465 99.6582 7.01856C100.415 6.64248 101.253 6.4589 102.098 6.4841C105.402 6.4841 107.453 8.81923 107.453 12.5497V20.8587H102.479L102.48 13.2029Z" fill="#172B4D"/>
<path d="M109.788 2.74503C109.87 2.03208 110.212 1.37429 110.747 0.896819C111.283 0.419347 111.976 0.155518 112.694 0.155518C113.411 0.155518 114.104 0.419347 114.64 0.896819C115.176 1.37429 115.517 2.03208 115.6 2.74503C115.504 3.44823 115.157 4.09306 114.623 4.55997C114.089 5.02687 113.403 5.28417 112.694 5.28417C111.984 5.28417 111.298 5.02687 110.764 4.55997C110.23 4.09306 109.883 3.44823 109.788 2.74503ZM110.193 6.603H115.168V20.8501H110.193V6.603Z" fill="#172B4D"/>
<path d="M118.796 10.741H117.045V6.60369H118.796V3.14972H123.797V6.60369H126.384V10.741H123.797V15.513C123.797 16.2737 124.125 16.6032 124.963 16.6032H126.409V20.8493H124.253C121.101 20.8493 118.796 19.5299 118.796 15.4428V10.741Z" fill="#172B4D"/>
<path d="M128.695 2.05981H133.67V8.63254C134.166 7.938 134.827 7.37745 135.593 7.00116C136.359 6.62486 137.207 6.44458 138.06 6.47648C141.309 6.47648 143.36 8.8116 143.36 12.5421V20.8554H138.386V13.2082C138.42 12.8781 138.384 12.5447 138.281 12.2294C138.177 11.9141 138.009 11.624 137.787 11.3778C137.564 11.1316 137.292 10.9348 136.989 10.8001C136.686 10.6654 136.358 10.5958 136.026 10.5958C135.694 10.5958 135.366 10.6654 135.063 10.8001C134.76 10.9348 134.488 11.1316 134.266 11.3778C134.043 11.624 133.875 11.9141 133.772 12.2294C133.668 12.5447 133.632 12.8781 133.666 13.2082V20.8554H128.691L128.695 2.05981Z" fill="#172B4D"/>
</svg>

            <ul className="flex flex-col gap-6 text-gray-700" style={{marginTop:'50px'}}>
                <li className="hover:cursor-pointer flex items-center gap-2">
                <svg width="18" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H7C7.79565 1 8.55871 1.31607 9.12132 1.87868C9.68393 2.44129 10 3.20435 10 4V7C10 7.79565 9.68393 8.55871 9.12132 9.12132C8.55871 9.68393 7.79565 10 7 10H4C3.20435 10 2.44129 9.68393 1.87868 9.12132C1.31607 8.55871 1 7.79565 1 7V4ZM16 4C16 3.20435 16.3161 2.44129 16.8787 1.87868C17.4413 1.31607 18.2044 1 19 1H22C22.7956 1 23.5587 1.31607 24.1213 1.87868C24.6839 2.44129 25 3.20435 25 4V7C25 7.79565 24.6839 8.55871 24.1213 9.12132C23.5587 9.68393 22.7956 10 22 10H19C18.2044 10 17.4413 9.68393 16.8787 9.12132C16.3161 8.55871 16 7.79565 16 7V4ZM1 19C1 18.2044 1.31607 17.4413 1.87868 16.8787C2.44129 16.3161 3.20435 16 4 16H7C7.79565 16 8.55871 16.3161 9.12132 16.8787C9.68393 17.4413 10 18.2044 10 19V22C10 22.7956 9.68393 23.5587 9.12132 24.1213C8.55871 24.6839 7.79565 25 7 25H4C3.20435 25 2.44129 24.6839 1.87868 24.1213C1.31607 23.5587 1 22.7956 1 22V19ZM16 19C16 18.2044 16.3161 17.4413 16.8787 16.8787C17.4413 16.3161 18.2044 16 19 16H22C22.7956 16 23.5587 16.3161 24.1213 16.8787C24.6839 17.4413 25 18.2044 25 19V22C25 22.7956 24.6839 23.5587 24.1213 24.1213C23.5587 24.6839 22.7956 25 22 25H19C18.2044 25 17.4413 24.6839 16.8787 24.1213C16.3161 23.5587 16 22.7956 16 22V19Z" stroke="#172B4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Dashboard
                </li>
                <li className="hover:cursor-pointer flex items-center gap-2">
                <svg width="18" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.884 19.6667H16.1147M13 1V2.33333M21.4853 4.51467L20.5427 5.45733M25 13H23.6667M2.33333 13H1M5.45733 5.45733L4.51467 4.51467M8.28533 17.7147C7.35316 16.7822 6.7184 15.5944 6.4613 14.3012C6.20421 13.008 6.33634 11.6677 6.84097 10.4496C7.34561 9.23154 8.20009 8.19046 9.29638 7.45799C10.3927 6.72553 11.6815 6.33458 13 6.33458C14.3185 6.33458 15.6073 6.72553 16.7036 7.45799C17.7999 8.19046 18.6544 9.23154 19.159 10.4496C19.6637 11.6677 19.7958 13.008 19.5387 14.3012C19.2816 15.5944 18.6468 16.7822 17.7147 17.7147L16.984 18.444C16.5663 18.8618 16.2349 19.3578 16.0089 19.9036C15.7829 20.4495 15.6666 21.0345 15.6667 21.6253V22.3333C15.6667 23.0406 15.3857 23.7189 14.8856 24.219C14.3855 24.719 13.7072 25 13 25C12.2928 25 11.6145 24.719 11.1144 24.219C10.6143 23.7189 10.3333 23.0406 10.3333 22.3333V21.6253C10.3333 20.432 9.85867 19.2867 9.016 18.444L8.28533 17.7147Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Learn
                </li>
                <li className="hover:cursor-pointer flex items-center gap-2">
                <svg width="18" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6667 22.6667H28.3334V20C28.3333 19.1687 28.0742 18.3581 27.5922 17.6808C27.1102 17.0036 26.4291 16.4933 25.6437 16.221C24.8583 15.9487 24.0075 15.9279 23.2097 16.1614C22.4119 16.3949 21.7066 16.8712 21.192 17.524M21.6667 22.6667H8.33335M21.6667 22.6667V20C21.6667 19.1253 21.4987 18.2893 21.192 17.524M21.192 17.524C20.6969 16.2866 19.8424 15.226 18.7387 14.4788C17.635 13.7317 16.3328 13.3324 15 13.3324C13.6672 13.3324 12.365 13.7317 11.2614 14.4788C10.1577 15.226 9.30316 16.2866 8.80802 17.524M8.33335 22.6667H1.66669V20C1.66675 19.1687 1.9258 18.3581 2.40784 17.6808C2.88987 17.0036 3.57093 16.4933 4.35635 16.221C5.14177 15.9487 5.99252 15.9279 6.79034 16.1614C7.58815 16.3949 8.29339 16.8712 8.80802 17.524M8.33335 22.6667V20C8.33335 19.1253 8.50135 18.2893 8.80802 17.524M19 5.33334C19 6.39421 18.5786 7.41163 17.8284 8.16177C17.0783 8.91192 16.0609 9.33334 15 9.33334C13.9392 9.33334 12.9217 8.91192 12.1716 8.16177C11.4214 7.41163 11 6.39421 11 5.33334C11 4.27248 11.4214 3.25506 12.1716 2.50492C12.9217 1.75477 13.9392 1.33334 15 1.33334C16.0609 1.33334 17.0783 1.75477 17.8284 2.50492C18.5786 3.25506 19 4.27248 19 5.33334ZM27 9.33334C27 10.0406 26.7191 10.7189 26.219 11.219C25.7189 11.7191 25.0406 12 24.3334 12C23.6261 12 22.9478 11.7191 22.4477 11.219C21.9476 10.7189 21.6667 10.0406 21.6667 9.33334C21.6667 8.6261 21.9476 7.94782 22.4477 7.44773C22.9478 6.94763 23.6261 6.66668 24.3334 6.66668C25.0406 6.66668 25.7189 6.94763 26.219 7.44773C26.7191 7.94782 27 8.6261 27 9.33334ZM8.33335 9.33334C8.33335 10.0406 8.0524 10.7189 7.5523 11.219C7.05221 11.7191 6.37393 12 5.66669 12C4.95944 12 4.28117 11.7191 3.78107 11.219C3.28097 10.7189 3.00002 10.0406 3.00002 9.33334C3.00002 8.6261 3.28097 7.94782 3.78107 7.44773C4.28117 6.94763 4.95944 6.66668 5.66669 6.66668C6.37393 6.66668 7.05221 6.94763 7.5523 7.44773C8.0524 7.94782 8.33335 8.6261 8.33335 9.33334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Forums
                </li>
                <li className="hover:cursor-pointer flex items-center gap-2">
                <svg width="18" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00002 4.66667H4.33335C3.62611 4.66667 2.94783 4.94762 2.44774 5.44772C1.94764 5.94781 1.66669 6.62609 1.66669 7.33333V23.3333C1.66669 24.0406 1.94764 24.7189 2.44774 25.219C2.94783 25.719 3.62611 26 4.33335 26H17.6667C18.3739 26 19.0522 25.719 19.5523 25.219C20.0524 24.7189 20.3334 24.0406 20.3334 23.3333V7.33333C20.3334 6.62609 20.0524 5.94781 19.5523 5.44772C19.0522 4.94762 18.3739 4.66667 17.6667 4.66667H15M7.00002 4.66667C7.00002 5.37391 7.28097 6.05219 7.78107 6.55229C8.28117 7.05238 8.95944 7.33333 9.66669 7.33333H12.3334C13.0406 7.33333 13.7189 7.05238 14.219 6.55229C14.7191 6.05219 15 5.37391 15 4.66667M7.00002 4.66667C7.00002 3.95942 7.28097 3.28115 7.78107 2.78105C8.28117 2.28095 8.95944 2 9.66669 2H12.3334C13.0406 2 13.7189 2.28095 14.219 2.78105C14.7191 3.28115 15 3.95942 15 4.66667" stroke="#172B4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Upskill
                </li>
                <li className="hover:cursor-pointer flex items-center gap-2">
                <svg width="18" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22.3333V14.3333C9 13.6261 8.71905 12.9478 8.21895 12.4477C7.71885 11.9476 7.04058 11.6667 6.33333 11.6667H3.66667C2.95942 11.6667 2.28115 11.9476 1.78105 12.4477C1.28095 12.9478 1 13.6261 1 14.3333V22.3333C1 23.0406 1.28095 23.7189 1.78105 24.219C2.28115 24.719 2.95942 25 3.66667 25H6.33333C7.04058 25 7.71885 24.719 8.21895 24.219C8.71905 23.7189 9 23.0406 9 22.3333ZM9 22.3333V9C9 8.29276 9.28095 7.61448 9.78105 7.11438C10.2811 6.61428 10.9594 6.33333 11.6667 6.33333H14.3333C15.0406 6.33333 15.7189 6.61428 16.219 7.11438C16.719 7.61448 17 8.29276 17 9V22.3333M9 22.3333C9 23.0406 9.28095 23.7189 9.78105 24.219C10.2811 24.719 10.9594 25 11.6667 25H14.3333C15.0406 25 15.7189 24.719 16.219 24.219C16.719 23.7189 17 23.0406 17 22.3333M17 22.3333V3.66667C17 2.95942 17.281 2.28115 17.781 1.78105C18.2811 1.28095 18.9594 1 19.6667 1H22.3333C23.0406 1 23.7189 1.28095 24.219 1.78105C24.719 2.28115 25 2.95942 25 3.66667V22.3333C25 23.0406 24.719 23.7189 24.219 24.219C23.7189 24.719 23.0406 25 22.3333 25H19.6667C18.9594 25 18.2811 24.719 17.781 24.219C17.281 23.7189 17 23.0406 17 22.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Contest
                </li>
                <li className="hover:cursor-pointer flex items-center gap-2">
                <svg width="18" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.732 2.90266C13.132 1.67466 14.8693 1.67466 15.268 2.90266L17.2933 9.13466C17.3805 9.40198 17.5499 9.6349 17.7774 9.80013C18.0049 9.96536 18.2788 10.0545 18.56 10.0547H25.1133C26.4053 10.0547 26.9413 11.708 25.8973 12.468L20.596 16.3187C20.3683 16.4842 20.1988 16.7176 20.1119 16.9854C20.0249 17.2531 20.025 17.5416 20.112 17.8093L22.136 24.0413C22.536 25.2707 21.1293 26.292 20.0853 25.532L14.784 21.6813C14.5562 21.5157 14.2817 21.4265 14 21.4265C13.7183 21.4265 13.4439 21.5157 13.216 21.6813L7.91467 25.532C6.87067 26.292 5.464 25.2693 5.864 24.0413L7.88801 17.8093C7.97504 17.5416 7.97509 17.2531 7.88815 16.9854C7.80121 16.7176 7.63173 16.4842 7.40401 16.3187L2.10267 12.468C1.05734 11.708 1.59601 10.0547 2.88667 10.0547H9.43867C9.72007 10.0547 9.99428 9.96578 10.222 9.80052C10.4498 9.63527 10.6194 9.40219 10.7067 9.13466L12.732 2.90266Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Leaderboard
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;