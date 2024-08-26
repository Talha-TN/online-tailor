import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";
const Header = () => {
  return (
   <div className="max-w-5xl text-white mt-2  m-auto flex justify-between items-center p-1 flex-wrap ">
    <HeaderLogo/>
    <HeaderNavbar/>
   </div>
  );
};

export default Header;
///////////////////////////////////////
// import React from "react";
// import HeaderLogo from "./HeaderLogo";
// import HeaderNavbar from "./HeaderNavbar";

// const Header = () => {
//   return (
//     <div className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
//       <HeaderLogo />
//       <HeaderNavbar />
//     </div>
//   );
// };

// export default Header;
