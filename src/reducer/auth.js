import { USER_DATA } from "../actions/auth";

const initialState = {
    user : "hello"
}

export const authReducer = (state = initialState , action) => {
    switch(action.type) {
        case USER_DATA : 
            return {
                ...state,
                user : action.payload
            }
        default :
            return state;    
    }
}