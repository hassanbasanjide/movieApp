import { useDispatch, useSelector } from 'react-redux';

 
  export const transformd_entered_data = (username,password) => {

    const key='51c693bac3375f66de95dcd3f264d1a8';

    return async dispatch=>{
      try{

        const response1= await fetch(
           `https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`);
      
          const resData = await response1.json();

          if(!response1.ok) {
        throw new Error('Some thing is going wrong.')
    }





  const response2= await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${key}`,{

        method:'POST',
        headers:{

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            request_token: resData.request_token
         
          })
          
        
    })


    if(!response2.ok) {
      throw new Error('Some thing is going wrong.')
  }

  

    const response3= await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${key}`,{

      method:'POST',
      headers:{

          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          request_token: resData.request_token
       
        })
        
  })

  const resData3 = await response3.json();

  

  if(!response3.ok) {
    throw new Error('Some thing is going wrong.')
}

    const response4=await fetch(`https://api.themoviedb.org/3/account?api_key=${key}&session_id=${resData3.session_id}`);
    const resData4=await response4.json();

    if(!response4.ok) {
      throw new Error('Some thing is going wrong.')
  }

    dispatch({
      type:'login',
      session_id:resData3.session_id,
      request_token:resData.request_token,
      global:resData4
    })
  

}catch (error){
    throw error
}
    }
}
