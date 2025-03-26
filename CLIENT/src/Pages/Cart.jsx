// import React from 'react'
// import { useSelector } from 'react-redux'
// import CardProduct from '../Component/CardProduct'
// import emptyCartImage from '../assets/Animation.gif'


// const Cart = () => {
//     const productCartItem = useSelector((state)=>state.product.cartItem)  //cartItem from redux
//     console.log(productCartItem)

//     const totalPrice=productCartItem.reduce((acc,curr)=>acc + parseInt(curr.total),0)   //to display the totalprice in summary //acc-accumulator
//     const totalQty = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.qty),0)     //to display the items while adding items in the cart

//     return (
//     <>
//     <div className='p-2 md:p-4 '>
//       <h2 className='text-lg md:text-2xl font-bold text-slate-700'>Your Cart Items</h2>
//       { productCartItem[0] ?
//       <div className='my-4 flex gap-5'>
//         {/* display cart items */}
//          <div className='w-full max-w-3xl bg-[#E5E4E2]'>
//            {
//             productCartItem?.map((el)=>(
                
//               <CardProduct 
//                     key={el._id}
//                     id={el._id}
//                     name={el.name}
//                     image={el.image}
//                     category={el.category}
//                     price={el.price}
//                     qty={el.qty}
//                     total={el.total}
//                     />
//             ))
//            }
//          </div>

//         {/* total cart item*/}
//          <div className='w-80 max-w-sm h-60 bg-[#E5E4E2] ml-auto hover:shadow-lg hover:scale-95 transition-all duration-500 ease-in-out sticky top-20'>
//          <h2 className='bg-[#2E4A3A] text-white p-2 text-lg'>Summary</h2>
//            <div className='flex items-center justify-center ml-auto  w-full py-2 text-lg border-b mt-16'>
//             <p className='ml-3'>Total Qty :</p>
//             <p className='ml-auto w-32 font-bold'>{totalQty}</p>
//            </div>
//            <div className='flex w-full  py-2 text-lg border-b '>
//             <p className='ml-3'>Total Price</p>
//             <p className='ml-auto w-32 font-bold'><span className="text-red-500">₹</span>{totalPrice}</p>
//            </div>
//            <button className='bg-[#E5E4E2] w-full text-lg font-bold text-[#2E4A3A] p-1 mt-11'>Payment</button>
//          </div>
//       </div>
//       :
//       <>
//       <div className='flex w-full justify-center items-center mt-32 flex-col'>
//         <img src={emptyCartImage} className='w-60 max-w-full'/>
//         <p className='text-slate-500 text-3xl font-bold'>🛒 !Empty </p>
//       </div>
//        </>
//      }
//     </div>
//     </>
//   )
// }

// export default Cart
