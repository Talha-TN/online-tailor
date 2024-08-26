
import React from 'react';
const MaleData = ({ maleData }) => { // Corrected the prop name to 'maleData'
  return (
    <div className='mt-10'>
      <table className='min-w-80 bg-white border border-gray-300'>
        <thead>
          <tr className='bg-gray-100 text-gray-700'>
            <th className='py-2 px-4 border-b'>Name</th>
            <th className='py-2 px-4 border-b'>Mobile</th>
            <th className='py-2 px-4 border-b'>Weast</th>
            <th className='py-2 px-4 border-b'>Chest</th>
            <th className='py-2 px-4 border-b'>Shoulder</th>
            <th className='py-2 px-4 border-b'>Sleeves</th>
            <th className='py-2 px-4 border-b'>Height</th>
          </tr>
        </thead>
        <tbody>
          {maleData.map((val, index) => (
            <tr key={index} className='bg-gray-50 text-black'>
              <td className='py-2 px-4 border-b'>{val.name}</td>
              <td className='py-2 px-4 border-b'>{val.mobile}</td>
              <td className='py-2 px-4 border-b'>{val.weast}</td>
              <td className='py-2 px-4 border-b'>{val.chest}</td>
              <td className='py-2 px-4 border-b'>{val.shoulder}</td>
              <td className='py-2 px-4 border-b'>{val.sleves}</td>
              <td className='py-2 px-4 border-b'>{val.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaleData;
/////////////////////
// import React from "react";

// const MaleData = ({ maleData }) => {
//   return (
//     <div className="mt-10">
//       <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
//         <thead>
//           <tr className="bg-gray-200 text-gray-700">
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Mobile</th>
//             <th className="py-2 px-4 border-b">Weast</th>
//             <th className="py-2 px-4 border-b">Chest</th>
//             <th className="py-2 px-4 border-b">Shoulder</th>
//             <th className="py-2 px-4 border-b">Sleeves</th>
//             <th className="py-2 px-4 border-b">Height</th>
//           </tr>
//         </thead>
//         <tbody>
//           {maleData.map((val, index) => (
//             <tr key={index} className="bg-gray-50 text-black">
//               <td className="py-2 px-4 border-b">{val.name}</td>
//               <td className="py-2 px-4 border-b">{val.mobile}</td>
//               <td className="py-2 px-4 border-b">{val.weast}</td>
//               <td className="py-2 px-4 border-b">{val.chest}</td>
//               <td className="py-2 px-4 border-b">{val.shoulder}</td>
//               <td className="py-2 px-4 border-b">{val.sleves}</td>
//               <td className="py-2 px-4 border-b">{val.height}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MaleData;
