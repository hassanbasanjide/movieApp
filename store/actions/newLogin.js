import { Linking } from 'expo';
import * as SecureStore from 'expo-secure-store';

import { ACCESS_TOKEN } from '../../utils/constants';

export const primeFunc = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/4/auth/request_token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
          },
          body: JSON.stringify({
            redirect_to: 'exp://127.0.0.1:19000/--/data?approved=true'
          })
        }
      );
      if (!response.ok) {
        throw new Error('some thing is wrong');
      }

      const resData = await response.json();
      await SecureStore.setItemAsync(
        'req_token',
        resData.request_token.toString()
      );

      dispatch({
        type: 'newLogin',
        request_token: resData.request_token
      });
      await Linking.openURL(
        `https://www.themoviedb.org/auth/access?request_token=${resData.request_token}`
      );
    } catch (error) {
      throw error;
    }
  };
};

export const primefunc2 = async reqToken => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/4/auth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          request_token: reqToken
        })
      }
    );
    const resData = await response.json();
    if(resData.success){
      await SecureStore.setItemAsync(
        'acount_id',
        resData.account_id.toString()
      );
      await SecureStore.setItemAsync(
        'access_token',
        resData.access_token.toString()
      );


      console.log(resData)
    }
    
    return resData.success;

   
  
   

   
  } catch (error) {
    throw error;
    
  }
};
