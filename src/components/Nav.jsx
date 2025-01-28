import React from 'react';

const Nav = () => {
    return ( 
        <>
        <div className='nav flex jstify-center items-center justify-between fixed top-0 left-0 right-0 z-10 p-1 pl-2 pr-2 mix-blend-difference text-white  z-40'>

            <div className='logo w-[7%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 22" class="header-logo__svg"><path d="M126 14.14V7.86h-8.397V6.28H126V0h-15.128v7.86h-1.689V0h-6.708v7.86h-1.689L95.744 0h-6.709v7.86h-1.688V0h-6.709v7.86h-8.397V0H65.51v7.86H45.362V6.28h8.42V0H38.653v7.86h-1.711V0h-6.708v7.86H25.19V0h-6.709v7.86h-6.73V6.28h5.042V0H0v6.28h5.043v1.58H0v6.28h5.043V22h6.708v-7.86h6.731V22h6.709v-7.86h5.043V22h6.708v-7.86h1.711V22h15.129v-6.28h-8.42v-1.58H65.51V22h13.44v-6.28h-6.71v-1.58h8.397V22h6.709v-7.86h1.688V22h6.709v-7.86h1.688l5.043 7.86h6.708v-7.86h1.689V22H126v-6.28h-8.397v-1.58z"></path></svg>
            </div>

            <div className="nav2 flex gap-10 text-[0.8em] font-light align-text-top">
                <h3>OPEN(10-6PM)</h3>
                <h3>UNKNOWN, LOC</h3>
            </div>

            <div className='nav3 gap-0.5 flex text-[1.2em] font-normal'>
                <h3>HOME</h3>
                <h3>/</h3>
                <h3>WORK</h3>
                <h3>/</h3>
                <h3>ENTERTAINMENT</h3>
                <h3>/</h3>
                <h3>ABOUT</h3>
                <h3>/</h3>
                <h3>FEED</h3>
                <h3>/</h3>
                <h3>PODCAST</h3>
                <h3>/</h3>
                <h3>CONTACT</h3>
                <h3>/</h3>
                <h3>SHOP</h3>
            </div>
            
        </div>
        </>
     );
}
 
export default Nav;