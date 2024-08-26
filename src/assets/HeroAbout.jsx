import React from "react";
import { FaStar } from "react-icons/fa";
const HeroAbout = () => {
  return (
    <div className="flex flex-col max-w-sm gap-4 pt-10">
      <p className="font-serif">
        Our online tailor service offers personalized tailoring from the comfort
        of your home. Submit your measurements through our easy-to-use form, and
        our skilled tailors will craft garments that fit you perfectly. Enjoy
        hassle-free tailoring with exceptional quality and precision.
      </p>
      <div className="">
        <p className="flex gap-2 items-center font-serif cursor-pointer "> Ratings <FaStar  className="hover:text-lime-300"/><FaStar  className="hover:text-lime-300"/><FaStar className="hover:text-lime-300" /></p>
      </div>
      <div className="flex gap-3">
        <p className="font-serif">Precision</p>
        <p className="font-serif">Refined</p>
        <p className="font-serif">Crafted</p>
      </div>
      <div className="">
        <button className="border-[1px] px-4 py-2 rounded-md hover:cursor-pointer">user Data</button>
      </div>
    </div>
  );
};

export default HeroAbout;
///////////////////////////////////////////
// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HeroAbout = () => {
//   return (
//     <div className="flex flex-col max-w-sm gap-6 pt-10">
//       <p className="font-serif">
//         Our online tailor service offers personalized tailoring from the comfort
//         of your home. Submit your measurements through our easy-to-use form, and
//         our skilled tailors will craft garments that fit you perfectly. Enjoy
//         hassle-free tailoring with exceptional quality and precision.
//       </p>
//       <div className="flex items-center gap-2">
//         <p className="flex gap-2 items-center font-serif cursor-pointer">
//           Ratings
//           <FaStar className="hover:text-lime-300 transition-colors duration-300" />
//           <FaStar className="hover:text-lime-300 transition-colors duration-300" />
//           <FaStar className="hover:text-lime-300 transition-colors duration-300" />
//         </p>
//       </div>
//       <div className="flex gap-3 font-serif">
//         <p>Precision</p>
//         <p>Refined</p>
//         <p>Crafted</p>
//       </div>
//       <div>
//         <button className="border-[1px] border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
//           User Data
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroAbout;
