import React from 'react'
import HeroAbout from './HeroAbout'
import HeroServices from './HeroServices'
const Hero = () => {
  return (
    <div className=' flex max-w-5xl px-5 pt-3 text-white m-auto justify-between flex-wrap'>
        <HeroAbout/>
        <HeroServices/>
    </div>
  )
}

export default Hero
///////////////////////////////
// import React from 'react';
// import HeroAbout from './HeroAbout';
// import HeroServices from './HeroServices';

// const Hero = () => {
//   return (
//     <div className="flex flex-col lg:flex-row max-w-5xl px-5 pt-3 text-white m-auto justify-between gap-10 lg:gap-20">
//       <HeroAbout />
//       <HeroServices />
//     </div>
//   );
// };

// export default Hero;
