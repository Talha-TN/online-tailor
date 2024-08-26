
import React, { useState } from "react";
import FemaleForm from "./FemaleForm";
import MaleForm from "./MaleForm";

const HeroServices = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleShowForm = (form) => {
    setActiveForm(prev => (prev === form ? null : form));
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <button
        onClick={() => handleShowForm("male")}
        className={`text-2xl border p-1 px-5 rounded-md ${activeForm === "male" ? "bg-blue-500 text-white" : "border-white"}`}
      >
        {activeForm === "male" ? " Male Form" : " Male Form"}
      </button>

      <button
        onClick={() => handleShowForm("female")}
        className={`text-2xl border p-1 px-3 rounded-md ${activeForm === "female" ? "bg-pink-500 text-white" : "border-white"}`}
      >
        {activeForm === "female" ? "Female Form" : "Female Form"}
      </button>

      {activeForm === "female" && <FemaleForm  activeForm={activeForm}/>}
      {activeForm === "male" && <MaleForm />}
    </div>
  );
};

export default HeroServices;

////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import FemaleForm from "./FemaleForm";
// import MaleForm from "./MaleForm";

// const HeroServices = () => {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleShowForm = (form) => {
//     setActiveForm((prev) => (prev === form ? null : form));
//   };

//   return (
//     <div className="flex flex-col gap-5 items-center">
//       <button
//         onClick={() => handleShowForm("male")}
//         className={`text-2xl border p-1 px-5 rounded-md transition-all duration-300 ${
//           activeForm === "male" ? "bg-blue-500 text-white" : "border-white"
//         }`}
//       >
//         Male Form
//       </button>

//       <button
//         onClick={() => handleShowForm("female")}
//         className={`text-2xl border p-1 px-3 rounded-md transition-all duration-300 ${
//           activeForm === "female" ? "bg-pink-500 text-white" : "border-white"
//         }`}
//       >
//         Female Form
//       </button>

//       <div className="w-full">
//         {activeForm === "female" && <FemaleForm />}
//         {activeForm === "male" && <MaleForm />}
//       </div>
//     </div>
//   );
// };

// export default HeroServices;
