import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant"

//when we add to cart so we will create a function.
export const addToCart=(data)=>{
    return{
        data:data,
        type:ADD_TO_CART

        // type return karna compulsary he kyuki store ko pata kese chalega ki karna kya he matlab button ki click per add hoga phir koi or dusra constant banaya to uske ly type alag hoga 
    }
}

//when we remove the cart so we will also create a function
// export const removeToCart=(data)=>{
//     return{
//         data:data,
//         type:REMOVE_TO_CART

//         //sabake ly alag alag banega type kyuki store ko samj pade
//     }
// }

