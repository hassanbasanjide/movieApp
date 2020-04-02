import { API_KEY } from "../../utils/constants";

export const reciveRate=()=>{
    return async dispatch=>{


        dispatch({
            type:'RECIVE_RATE'
        })
    }
}
