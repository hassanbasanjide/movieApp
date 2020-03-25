import { ACCESS_TOKEN } from "../../utils/constants";
export const primeFunc = () => {
    console.log('start')
  return async dispatch => {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/4/auth/request_token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${ACCESS_TOKEN}`
              },
              body: JSON.stringify({
                  redirect_to: "http://www.themoviedb.org/"
                })
            }
          );
            if(!response.ok){
                throw new Error('some thing is wrong');
            }

            
            const resData=await response.json();

            console.log(resData);

            dispatch({
                type:'test'
            })
        
    } catch (error) {
        throw error
        
    }
   
  };
};
