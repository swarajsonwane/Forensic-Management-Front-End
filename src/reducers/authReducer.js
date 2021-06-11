import {REGISTER , LOGIN} from '../actions/types';
import isEmpty from '../validations/isEmpty';

const initialState = {
    isAuthenticated:false,
    user : {}
}

// eslint-disable-next-line import/no-anonymous-default-export
const authReducer =  (state = initialState , action ) =>
{
 switch(action.type)
 {
     case REGISTER:
         return {
             ...state,
             user:action.payload
         }

         case LOGIN:
             return {
                 ...state,
                 user:action.payload,
                 isAuthenticated: !isEmpty(action.payload)
             }
     default:
     return state;
 }
};

export default authReducer; 