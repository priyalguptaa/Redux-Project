import { ADD_TO_CART } from "../Constant";

const initialState = {
    cardData: []

    //jo bhi add hoga card yha array me stre hota jyga
}
export default function cardItems(state = initialState, action) {
    //yha switch case lagynge taki konsa perform karna he store ko samj pad jay add_to_cart ya remove_to_cart ya or koi phir
    switch (action.type) {
        case ADD_TO_CART:
            return {
                    ...state,
                cardData: action.data
            }
            break;
        default:
            return state
    }
}