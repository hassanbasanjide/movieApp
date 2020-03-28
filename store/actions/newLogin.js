import { Linking } from "expo";

import { ACCESS_TOKEN } from "../../utils/constants";
export const primeFunc = async () => {
  console.log('start')
  try {
    const response = await fetch(
      "https://api.themoviedb.org/4/auth/request_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          redirect_to: "exp://127.0.0.1:19000/--/data?approved=true"
        })
      }
    );
    if (!response.ok) {
      throw new Error('some thing is wrong');
    }


    const resData = await response.json();
    await Linking.openURL(`https://www.themoviedb.org/auth/access?request_token=${resData.request_token}`)

    console.log(resData);

    // dispatch({
    //     type:'test'
    // })

  } catch (error) {
    throw error


  };
};
