import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Page2 = () => {


gsap.registerPlugin(ScrollTrigger);


  function pageEffect(){  
  useGSAP(function(){
    gsap.to('.second', {
      rotation: '-=10',
      translateX: '-=10%',
      transformOrigin: 'bottom left',
      ease:'linear',
      

      scrollTrigger: {
        trigger: '.second',
        start: 'top 50%',
        end: 'bottom 70%',
        scrub: true,
        
      }
    })
  })

  useGSAP(function(){
    gsap.from('.third', {
      rotation: '+=15',
      translateY: '-=60%',
      transformOrigin: 'bottom left',
      ease:'linear',


      scrollTrigger: {
        trigger: '.third',
        start: 'top 50%',
        end: 'bottom 70%',
        scrub: true,
      }
    })
  })
  

  useGSAP(function(){
    gsap.from('.fourth', {
      rotation: '+=16',
      translateY: '-=60%',
      transformOrigin: 'bottom left',
      ease:'linear',


      scrollTrigger: {
        trigger: '.fourth',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true,
      }
    })
  })
  

  useGSAP(function(){
    gsap.from('.fifth', {
      rotation: '+=15',
      translateY: '-=60%',
      transformOrigin: 'bottom left',
      ease:'linear',


      scrollTrigger: {
        trigger: '.fifth',
        start: 'top 50%',
        end: 'bottom 70%',
        scrub: true,
      }
    })
  })

  useGSAP(function(){
    gsap.from('.sixth', {
      rotation: '+=20',
      translateX: '-=50%',
      translateY: '-=100%',
      transformOrigin: 'bottom left',
      ease:'linear',


      scrollTrigger: {
        trigger: '.sixth',
        start: 'top 110%',
        end: 'bottom 80%',
        scrub: true,
      }
    })
  })  

}

pageEffect();



    return (

        <>
        
        <div className='Page2 relative bg-[rgba(255,0,0,0.7)] backdrop-blur '>


            <div className='second h-[115vh] w-screen bg-stone-100'>
              <div className=' flex flex-col'>
                <h4 className='text-[0.8em] p-[1em]'>
                  / ABOUT THE LINE
                </h4>
              <h1 className='text-[10em] font-medium leading-[15vh]'>
                Highlights
              </h1>
              <div className='flex gap-10 p-2'>
              <h3 className='text-[2em] leading-[25vh] underline underline-offset-8 underline decoration-1'>
                The Work 
              </h3>
              <h3 className='text-[2em] leading-[25vh] underline underline-offset-8 underline decoration-1 '>
                The Studio
              </h3>
              </div>
              </div>
            </div>


            <div className='third h-[130vh] w-screen bg-gray-300 p-4 sticky top-0 overflow-hidden '>
              <div className='flex justify-between items-center'>
                <h1 className='text-[5em] font-medium'>Azuki Elementals</h1>
                <h2 className='text-[2em]'>View Project</h2>
              </div>
              <div className='h-full w-full border-2 border-dotted border-black p-4 '>
                <div className='text-[0.7em] font-medium flex justify-between p-1 pr-2 pl-2 align-text-top'>
                <h1>OVERSCAN</h1>
                <h1>1577 x 974</h1>
                </div>
                <div className='h-full w-full border-solid border-4 border-black'>
                    <video autoPlay loop muted className='w-full' src="src/assects/pageEffect-vid-01.mp4"></video>
                </div>   
              </div> 
            </div>

            <div className='h-[60vh] w-screen relative'></div>

            <div className='fourth h-screen w-screen bg-gray-300 p-4 sticky top-0 '>
              <div className='flex justify-between items-center'>
                <h1 className='text-[5em] font-medium'>Delivery At Dawn</h1>
                <h2 className='text-[2em]'>View Project</h2>
              </div>
              <div className='h-full w-full border-2 border-dotted border-black p-4 '>
                <div className='text-[0.7em] font-medium flex justify-between p-1 pr-2 pl-2 align-text-top'>
                <h1>OVERSCAN</h1>
                <h1>1577 x 974</h1>
                </div>
                <div className='h-full w-full border-4 border-black'>
                    <video autoPlay loop muted className='w-full' src="src/assects/pageEffect-vid-02.mp4"></video>
                </div>   
              </div>
            </div>

            <div className='h-[60vh] w-screen relative'></div>

            <div className='fifth h-screen w-screen bg-gray-300 sticky top-0 p-4'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[5em] font-medium'>Izzo</h1>
                <h2 className='text-[2em]'>View Project</h2>
              </div>
              <div className='h-full w-full border-2 border-dotted border-black p-4 '>
                <div className='text-[0.7em] font-medium flex justify-between p-1 pr-2 pl-2 align-text-top'>
                <h1>OVERSCAN</h1>
                <h1>1577 x 974</h1>
                </div>
                <div className='h-full w-full border-4 border-black'>
                    <video autoPlay loop muted className='w-full' src="src/assects/pageEffext-vid-03.mp4"></video>
                </div>   
              </div>
            </div>

            <div className='h-[100vh] w-screen relative'></div>

            <div className='sixth h-[160vh] w-screen bg-stone-100 sticky top-0 '>
              <div className='p-2'>
                <h2 className='text-[0.8em] pr-2 '>/ MAKE YOUR MARK</h2>
                <h1 className='text-[11em] leading-[18vh] font-semibold'>The Studio</h1>

                <div className='h-[30vh] w-full'></div>
                
                <div className='flex justify-between h-auto w-screen bg-stone-100 p-4'>

                  <div className='secaction-left h-auto w-full relative p-10'>
                    
                      <img className='img1 w-[30vw] h-[90vh] ml-[13vw] rotate-[5deg]' src="src/assects/images/Seaction-img-two.avif" alt="" />
                      <img className='img2 absolute w-[30vw] h-[90vh] top-24' src="src/assects/images/Seacion-img-one.avif" alt="" />
                   
                  </div>

                  <div className='seaction-right h-full w-full p-10'>
                    <h2 className='text-[0.8em] leading-[4vh] pr-2'>/ THE LOWDOWN</h2>
                    <h1 className='leading-[3.5vh] text-[1.5em] '>
                    We’re a globally renowned animation studio based in East LDN. We work across advertising interactive media, music videos and our own original content.
                    </h1>
                    <h2 className='text-[0.8em] pr-2 mt-16 leading-[5vh]'>/ AWARDS & MENTIONS</h2>
                    <div className='Awards flex justify-between  text-[0.9em] font-normal leading-[2.5vh]'>
                      <div className='awardUn underline underline-offset-4 decoration-1 '>
                        <p>BAFTA</p>
                        <p>AD YOUNG GUN AWARDS</p>
                        <p>MEOW ANIMATION AWARDS</p>
                        <p>CLIO</p>
                        <p>MEOW ARROWS</p>
                        <p>MEOW MUSIC VIDEO AWARDS</p>
                        <p>D&AD</p>
                      </div>
                      <div className=''>
                        <p>GQ</p>
                        <p>NME</p>
                        <p>THE VERGE</p>
                        <p>VARIETY</p>
                        <p>THE HOLLYWOOD REpOTER</p>
                        <p>THE LOS ANGELES TIME</p>
                        <p>THE TONIGHT SHOW WITH JIMMY FALLON</p>
                        <p>BBC</p>
                        <p>WIRED MAGAZINE</p>
                        <p>THE INDEPENDENT</p>
                        <p>THE SUNDAY TIME</p>
                        <p>ROLLING STONE</p>
                        <p>THE TELEGRApH</p>
                        <p>pLAYBOY</p>
                        <p>COSOMPOLITANT</p>
                        <p>E ONLINE</p>
                        <p>NERDIST</p>
                        <p>NBC NEWS</p>
                        <p>POLYGON</p>
                        <p>HYPERBEAST</p>
                      </div>
                    </div>
                    <div className='mt-10 '>
                      <h1 className='text-[2em] font-large leading-[4vh]'>“BELLISSIMO”</h1>
                      <h2 className='text-[0.8em] font-normal'>– GUILLERMO DEL TORO</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        </div>
        
        </>
     );
}
 
export default Page2;