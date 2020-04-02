import { API_KEY,ACCESS_TOKEN } from "../../utils/constants";
import * as SecureStore from 'expo-secure-store';


export const reciveRate=()=>{
  
    return async dispatch=>{
        try {
            
            const accountId =  await SecureStore.getItemAsync('acount_id');
                console.log(accountId)
        
            const recivedRateds = await fetch(
                `https://api.themoviedb.org/4/account/${accountId}/movie/rated?page=1`,{
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                }
            );

            const ratedList = await recivedRateds.json();
            console.log(ratedList);
        } catch(error) {
            throw error
        }

        dispatch({
            type:'RECIVE_RATE'
        })
    }
}
