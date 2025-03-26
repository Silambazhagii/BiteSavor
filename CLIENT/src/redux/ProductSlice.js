import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    productList:[],
    cartItem:[]
}
 

export const productSlice=createSlice({
    name : "product",
    initialState,
    reducers :{
        setDataProduct :(state,action)=>{
             console.log(action)
            state.productList=[...action.payload];
        },
        addCartItem:(state,action)=>{
              //console.log(action)      //to add 
              const check = state.cartItem.some(el => el._id === action.payload._id)
              //console.log(check)
              if(check){
                toast("Already Item in cart")
              }
              else{
                toast("Item Add successfully")
                const total=action.payload.price;
                state.cartItem = [
                    ...state.cartItem,
                    {...action.payload, qty:1, total:total},
              ]
              }
             
              //state.cartItem = [...state.cartItem,{...action.payload, qty:1,total}]
        },
        deleteCartItem:(state,action)=>{
             // console.log(action.payload)    // to delete
              toast("One Item Deleted")
              const index=state.cartItem.findIndex((el)=>el._id === action.payload)  //it will display the numbers while u deleting,how much u deleted
              state.cartItem.splice(index,1)                  //to modify the contents of an array by removing or replacing existing elements, or adding new elements in place.
              console.log(index)
        },
        increaseQty: (state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id === action.payload)     //to find the index-current quantity of the item
            let qty=state.cartItem[index].qty 
            const qtyInc= ++qty                                   //to increment the value
            state.cartItem[index].qty=qtyInc            //to increase the total value while adding more items

            const price=state.cartItem[index].price    //to increase the total value while adding more items
            const total=price * qtyInc

            state.cartItem[index].total=total
        },
        decreaseQty:(state,action)=>{
            const index=state.cartItem.findIndex((el)=>el._id === action.payload)     //to find the index-current quantity of the item
            let qty=state.cartItem[index].qty 
            if(qty>1){      //if any one is there,only will delte
                const qtyDec= --qty 
                state.cartItem[index].qty= qtyDec   //to decrement the value

                const price=state.cartItem[index].price    //to decrease the total value while adding more items
                const total=price * qtyDec  

                state.cartItem[index].total=total
            }                                     
           
        }
    }
})

export const {setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty} = productSlice.actions

export default productSlice.reducer

//whatever we are giving in redux ,we have to import 