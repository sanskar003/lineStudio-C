import React from 'react';

const Page3 = () => {
    return ( 
        <>
        <div className='h-auto w-screen relative bg-stone-100 p-4'>
        <div className='h-[40vh] w-full '></div>    
            <h2 className='text-[0.8em] mb-4'>/ CLIENTS + PARTNERS</h2>
            <div className='Partners'>
                <h1 className='text-[3em] font-medium leading-[7vh]'>
                    Gucci / RIOT GAMES / Mercedes-benz / MARVEL / Virgin / Gorillaz / Unilever / Vice / Sanrio / Freeview / Ubisoft / Azuki / Estee Launder / Kenzo / Channel 4 / BIZZARD
                </h1>
            </div>
            <div className='h-screen w-full relative border-2'>
                <video autoPlay loop muted className='w-full h-full object-cover' src="src/assects/Page3-vid.mp4"></video>
                <div className='h-[70vh] w-[40vw] bg-[#990000] mix-blend-overlay z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h2 className='flex justify-between text-[0.8em] text-stone-100'>
                        <p>SHOWREEL / 2024</p>
                        <p>1:26</p>
                        <p>THE LINE MMXXIV</p>
                    </h2>
                    <h2 className='text-[5em] text-stone-100 font-medium flex justify-center mt-[20vh]'>Reel</h2>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Page3;