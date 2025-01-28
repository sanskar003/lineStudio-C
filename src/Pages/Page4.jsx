import { useGSAP } from '@gsap/react';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const Page4 = () => {


    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
        gsap.to('.revealPage', {
            rotation: '+=-15',
            translateX: '-=10%',
            ease:'linear',
            // transformOrigin: 'bottom left',
            scrollTrigger: {
              trigger: '.triggerp',
              start: 'top 40%',
              end: 'bottom 25%',
              scrub: true,
            },
        })
    })
    
 


    return ( 
        <>
        <div className='bg-[#ff0202] relative'>
         <div className='h-screen w-screen relative z-30 revealPage  '>

            <div className='h-screen w-screen bg-stone-100 p-4'>
              
                <div className=' flex justify-between items-center p-8'>
                <h1 className='letTalk text-[9em] font-medium underline underline-offset-8 decoration-1	'>Let's Talk</h1>
                <div className='w-28 h-28'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19" class="footer-cta__svg footer-cta__svg--main"><path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path></svg>
                </div>
                </div>
                <div className='triggerp mt-44'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 126 22" class="header-logo__svg">
                  <path d="M126 14.14V7.86h-8.397V6.28H126V0h-15.128v7.86h-1.689V0h-6.708v7.86h-1.689L95.744 0h-6.709v7.86h-1.688V0h-6.709v7.86h-8.397V0H65.51v7.86H45.362V6.28h8.42V0H38.653v7.86h-1.711V0h-6.708v7.86H25.19V0h-6.709v7.86h-6.73V6.28h5.042V0H0v6.28h5.043v1.58H0v6.28h5.043V22h6.708v-7.86h6.731V22h6.709v-7.86h5.043V22h6.708v-7.86h1.711V22h15.129v-6.28h-8.42v-1.58H65.51V22h13.44v-6.28h-6.71v-1.58h8.397V22h6.709v-7.86h1.688V22h6.709v-7.86h1.688l5.043 7.86h6.708v-7.86h1.689V22H126v-6.28h-8.397v-1.58z"></path>
                </svg>
                </div>
            </div>
            </div>

            
         </div>
         
        
         
        
        </>
     );
}
 
export default Page4;