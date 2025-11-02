import React from 'react';

const BgVideo = () => {


  return ( 
    <>

    <div className='relative'>
        <video autoPlay loop muted  className='w-screen h-screen object-cover fixed'  src="src/public/BgMainVideo.mp4"/>
    </div>

    </>

   );
}
 
export default BgVideo;