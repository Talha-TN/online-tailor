import UserData from "./UserData";
import React, { useRef, useState, useEffect } from "react";
const FemaleForm = () => {
  const [femaleData, setFemaleData] = useState([]);
  const [showData,setShowData]=useState(false)
  const nameRef = useRef();
  const mobileRef = useRef();
  const weastRef = useRef();
  const chestRef = useRef();
  const shoulderRef = useRef();
  const slevesRef = useRef();
  const heightRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      weast: weastRef.current.value,
      chest: chestRef.current.value,
      shoulder: shoulderRef.current.value,
      sleves: slevesRef.current.value,
      height: heightRef.current.value,
    };

    // Update state with the new data appended to the existing data
    setFemaleData((prevData) => [...prevData, newData]);

    // Clear form fields
    nameRef.current.value = "";
    mobileRef.current.value = "";
    weastRef.current.value = "";
    chestRef.current.value = "";
    shoulderRef.current.value = "";
    slevesRef.current.value = "";
    heightRef.current.value = "";
  };

  useEffect(() => {
    console.log(femaleData); // Log the updated data when femaleData changes
  }, [femaleData]);
   useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(femaleData))

   },[femaleData])
  return (
    <div>
      <h1>Female form is open</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 text-black"
      >
        <input
          type="text"
          name="name"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Female Name:"
          ref={nameRef}
        />

        <input
          type="text"
          name="mobile"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Mobile:"
          ref={mobileRef}
        />

        <input
          type="text"
          name="weast"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Weast in cm:"
          ref={weastRef}
        />

        <input
          type="text"
          name="chest"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Chest in cm:"
          ref={chestRef}
        />

        <input
          type="text"
          name="shoulder"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Shoulders in cm:"
          ref={shoulderRef}
        />
        <input
          type="text"
          name="height"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Height in cm:"
          ref={heightRef}
        />

        <input
          type="text"
          name="sleves"
          className="w-60 border px-3 py-1 rounded-md"
          placeholder="Sleeves in cm:"
          ref={slevesRef}
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-lg w-60"
        >
          Submit
        </button>
      </form>
      <button className="border-[1px] mt-3 w-60 px-4 py-2 rounded-lg" onClick={()=>setShowData(true)}>Show users Data</button>
     {showData && <UserData femaleData={femaleData}/>}
    </div>
  );
};
export default FemaleForm;
//////////////////////////////////////////////
// import React, { useRef, useState, useEffect } from "react";
// import UserData from "./UserData";

// const FemaleForm = () => {
//   const [femaleData, setFemaleData] = useState([]);
//   const [showData, setShowData] = useState(false);

//   const nameRef = useRef();
//   const mobileRef = useRef();
//   const weastRef = useRef();
//   const chestRef = useRef();
//   const shoulderRef = useRef();
//   const slevesRef = useRef();
//   const heightRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newData = {
//       name: nameRef.current.value,
//       mobile: mobileRef.current.value,
//       weast: weastRef.current.value,
//       chest: chestRef.current.value,
//       shoulder: shoulderRef.current.value,
//       sleves: slevesRef.current.value,
//       height: heightRef.current.value,
//     };

//     setFemaleData((prevData) => [...prevData, newData]);

//     // Clear form fields
//     nameRef.current.value = "";
//     mobileRef.current.value = "";
//     weastRef.current.value = "";
//     chestRef.current.value = "";
//     shoulderRef.current.value = "";
//     slevesRef.current.value = "";
//     heightRef.current.value = "";
//   };

//   useEffect(() => {
//     console.log(femaleData); // Log the updated data when femaleData changes
//   }, [femaleData]);

//   return (
//     <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md">
//       <h1 className="text-2xl font-bold mb-4 text-pink-600">Female Form</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <input
//           type="text"
//           name="name"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Female Name:"
//           ref={nameRef}
//         />
//         <input
//           type="text"
//           name="mobile"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Mobile:"
//           ref={mobileRef}
//         />
//         <input
//           type="text"
//           name="weast"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Weast in cm:"
//           ref={weastRef}
//         />
//         <input
//           type="text"
//           name="chest"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Chest in cm:"
//           ref={chestRef}
//         />
//         <input
//           type="text"
//           name="shoulder"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Shoulders in cm:"
//           ref={shoulderRef}
//         />
//         <input
//           type="text"
//           name="height"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Height in cm:"
//           ref={heightRef}
//         />
//         <input
//           type="text"
//           name="sleves"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Sleeves in cm:"
//           ref={slevesRef}
//         />
//         <button
//           type="submit"
//           className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
//         >
//           Submit
//         </button>
//       </form>
//       <button
//         onClick={() => setShowData(true)}
//         className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
//       >
//         Show Users Data
//       </button>
//       {showData && <UserData femaleData={femaleData} />}
//     </div>
//   );
// };

// export default FemaleForm;
////////////////////////////////////////import React, { useRef, useState, useEffect } from "react";
// import UserData from "./UserData";
// import { useState,useRef,useEffect } from "react";
// const FemaleForm = () => {
//   const [femaleData, setFemaleData] = useState([]);
//   const [showData, setShowData] = useState(false);

//   const nameRef = useRef();
//   const mobileRef = useRef();
//   const weastRef = useRef();
//   const chestRef = useRef();
//   const shoulderRef = useRef();
//   const slevesRef = useRef();
//   const heightRef = useRef();

//   // Retrieve data from local storage when component mounts
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("list"));
//     if (storedData) {
//       setFemaleData(storedData);
//     }
//   }, []);

//   // Save data to local storage whenever femaleData changes
//   useEffect(() => {
//     localStorage.setItem("list", JSON.stringify(femaleData));
//   }, [femaleData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newData = {
//       name: nameRef.current.value,
//       mobile: mobileRef.current.value,
//       weast: weastRef.current.value,
//       chest: chestRef.current.value,
//       shoulder: shoulderRef.current.value,
//       sleves: slevesRef.current.value,
//       height: heightRef.current.value,
//     };

//     setFemaleData((prevData) => [...prevData, newData]);

//     // Clear form fields
//     nameRef.current.value = "";
//     mobileRef.current.value = "";
//     weastRef.current.value = "";
//     chestRef.current.value = "";
//     shoulderRef.current.value = "";
//     slevesRef.current.value = "";
//     heightRef.current.value = "";
//   };

//   return (
//     <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md">
//       <h1 className="text-2xl font-bold mb-4 text-pink-600">Female Form</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-black">
//         <input
//           type="text"
//           name="name"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Female Name:"
//           ref={nameRef}
//         />
//         <input
//           type="text"
//           name="mobile"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Mobile:"
//           ref={mobileRef}
//         />
//         <input
//           type="text"
//           name="weast"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Weast in cm:"
//           ref={weastRef}
//         />
//         <input
//           type="text"
//           name="chest"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Chest in cm:"
//           ref={chestRef}
//         />
//         <input
//           type="text"
//           name="shoulder"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Shoulders in cm:"
//           ref={shoulderRef}
//         />
//         <input
//           type="text"
//           name="height"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Height in cm:"
//           ref={heightRef}
//         />
//         <input
//           type="text"
//           name="sleves"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Sleeves in cm:"
//           ref={slevesRef}
//         />
//         <button
//           type="submit"
//           className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
//         >
//           Submit
//         </button>
//       </form>
//       <button
//         onClick={() => setShowData(true)}
//         className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
//       >
//         Show Users Data
//       </button>
//       {showData && <UserData femaleData={femaleData} />}
//     </div>
//   );
// };

// export default FemaleForm;
