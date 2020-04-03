import { API_KEY, ACCESS_TOKEN } from "../../utils/constants";
import * as SecureStore from 'expo-secure-store';


export const reciveRate=()=>{

    const page=1;
  
    return async dispatch=>{
        try {
            
            const accountId =  await SecureStore.getItemAsync('acount_id');
            const access_token =  await SecureStore.getItemAsync('access_token');
        
        
            const recivedRateds = await fetch(
                `https://api.themoviedb.org/4/account/${accountId}/movie/rated?page=${page}`,{
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            const ratedList = await recivedRateds.json();

            dispatch({
                type:'RECIVE_RATE',
                data:ratedList.results
            })
            
        } catch(error) {
            throw error
        }

        
    }
}
