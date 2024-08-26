
import React, { useRef, useState, useEffect } from "react";
import MaleData from "./MaleData.jsx";
const MaleForm = () => {
  const [maleData, setMaleData] = useState([]);
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

    setMaleData((prevData) => [newData, ...prevData]);

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
    console.log(maleData);
  }, [maleData]);

  return (
    <div>
      <h1>Male form is opened</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 text-black"
      >
        <input
          type="text"
          name="name"
          className="w-60 border px-3 py-1"
          placeholder="Male name:"
          ref={nameRef}
        />

        <input
          type="text"
          name="mobile"
          className="w-60 border px-3 py-1"
          placeholder="Mobile:"
          ref={mobileRef}
        />

        <input
          type="text"
          name="weast"
          className="w-60 border px-3 py-1 "
          placeholder="Weast in cm:"
          ref={weastRef}
        />

        <input
          type="text"
          name="chest"
          className="w-60 border px-3 py-1"
          placeholder="Chest in cm:"
          ref={chestRef}
        />

        <input
          type="text"
          name="shoulder"
          className="w-60 border px-3 py-1"
          placeholder="Shoulders in cm:"
          ref={shoulderRef}
        />
        <input
          type="text"
          name="height"
          className="w-60 border px-3 py-1"
          placeholder="Height in cm:"
          ref={heightRef}
        />

        <input
          type="text"
          name="sleves"
          className="w-60 border px-3 py-1"
          placeholder="Sleeves in cm:"
          ref={slevesRef}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-60"
        >
          Submit
        </button>
        <button onClick={()=>setShowData(true)} className="text-white w-60 border-[1px] rounded-md py-2 px-4 cursor-pointer"> show data </button>
      </form>

      {showData&&<MaleData maleData={maleData} />} {/* Passing the correct prop */}
    </div>
  );
};

export default MaleForm;
//////////////////////////////////////

// import React, { useRef, useState, useEffect } from "react";
// import MaleData from "./MaleData";

// const MaleForm = () => {
//   const [maleData, setMaleData] = useState([]);

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

//     setMaleData((prevData) => [newData, ...prevData]);

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
//     console.log(maleData);
//   }, [maleData]);

//   return (
//     <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md">
//       <h1 className="text-2xl font-bold mb-4 text-blue-600">Male Form</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <input
//           type="text"
//           name="name"
//           className="border px-3 py-2 rounded-md"
//           placeholder="Male name:"
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
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//       <MaleData maleData={maleData} />
//     </div>
//   );
// };

// export default MaleForm;
