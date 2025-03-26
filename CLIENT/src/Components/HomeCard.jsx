// import React from "react";

// const HomeCard = ({ name, image, category, price, id, loading }) => {
//   const isLoading = !name;
  
//   return (
//     <div className={`h-auto w-full p-2 min-w-[200px] ${isLoading ? 'bg-transparent' : 'bg-white'}`}>
//       {isLoading ? (
//         <div className="flex flex-col items-center justify-center h-36 w-full">
//           <div className="h-36 w-full bg-gray-300 rounded shadow animate-pulse">
//             <p className="text-center text-gray-500 mt-14">{loading}</p>
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="w-60">
//             <img
//               src={image}
//               className="h-full w-full rounded shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out"
//               alt={name}
//             />
//           </div>
//           <h3
//             className="text-center text-slate-800 capitalize text-lg hover:text-slate-900"
//             style={{
//               fontFamily: '"Jersey 25", sans-serif',
//               fontWeight: 400,
//             }}
//           >
//             {name}
//           </h3>
//           <p className="text-center">
//             <span className="text-red-500">₹</span>
//             <span>{price}</span>
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default HomeCard;


import React from 'react'

function HomeCard() {
  return (
    <div>HomeCard</div>
  )
}

export default HomeCard