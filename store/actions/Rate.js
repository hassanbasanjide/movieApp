import { API_KEY,ACCESS_TOKEN } from "../../utils/constants";
import * as SecureStore from 'expo-secure-store';


export const reciveRate=async()=>{

    const page=1;
  
   
        try {
            
            const accountId =  await SecureStore.getItemAsync('acount_id');
            const access_token =  await SecureStore.getItemAsync('access_token');
        
            const response = await fetch(
                `https://api.themoviedb.org/4/account/${accountId}/movie/rated?page=${page}`,{
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

          
            if(!response.ok){
                throw new Error('some thing is wrong')
            }
            const resData = await response.json();

           
               return resData.results
         
            
        } catch(error) {
            throw error
        }

        
    
}

export const deleteRate=async(movieId)=>{

    
  
    
        try {
            const sessionId= await createSessionId();
           
        
        
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': `application/json;charset=utf-8`
                    }
                }
            );

            const resData = await response.json();
            
                if(!response.ok){
                    throw new Error('some thing i wrong')
                }
         

            
            
        } catch(error) {
            throw error
        }

        
    }


export const createSessionId=async()=>{

    

        try {
            const access_token =  await SecureStore.getItemAsync('access_token');
            const response = await fetch(
                `https://api.themoviedb.org/3/authentication/session/convert/4?api_key=${API_KEY}`,{
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        access_token: access_token
                    })

                }
            );
           
            if(!response.ok){
                throw new Error('some thing is wrong')
            }
            const resData = await response.json();
            
            return resData.session_id;
        } catch (error) {
            throw error;
        }
}


export const setRateMovie=async(Rate,movieId)=>{

    
  
    
    try {
        const sessionId= await createSessionId();
    
    
    
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`,{
                method: 'POST',
                headers: {
                    'Content-Type': `application/json;charset=utf-8`
                },
                body: JSON.stringify({
                   value:Rate
                  })
            }
        );

        const resData = await response.json();
        
            if(!response.ok){
                throw new Error('some thing i wrong')
            }
     console.log(resData)

        
        
    } catch(error) {
        throw error
    }

    
}
