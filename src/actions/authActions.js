import { REGISTER , LOGIN} from "./types"

export const  registerUser =(userdata,history) =>{

    return {
        type:REGISTER, 
        payload : userdata
    }
};

export const loginUser = (userdata,history) =>{

    return {
        type:LOGIN, 
        payload : userdata
    }
};

// const authUser  ={
//     registerUser,
//     loginUser,
// };

// export default registerUser;
// export {loginUser};
