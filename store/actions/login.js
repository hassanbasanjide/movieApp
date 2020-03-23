import { useDispatch, useSelector } from "react-redux";
import { API_KEY, BASE_URL } from "../../utils/constants";

export const requestTokenAndLogin = (username, password) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`
      );
  
      if (!response.ok) {
        throw new Error("Something is wrong!");
      }
  
      const resData = await response.json();

      const requestToken = resData.request_token;
  
      await validateWithLogin(username, password, requestToken);

      const sessionId = await createSession(requestToken);

      const userData = await getUserData(sessionId);

       dispatch({
        type: "login",
        session_id: sessionId,
        request_token: requestToken,
        global: userData
      });
    } catch (e) {
      throw e;
    }
  } 
};

const validateWithLogin = async (username, password, requestToken) => {
  try {
    const response1 = await fetch(
      `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          request_token: requestToken
        })
      }
    );
    if (!response1.ok) {
      throw new Error("Something is wrong!");
    }
  } catch (e) {
    console.log(`this is the error: ${e}`);
    throw e;
  }
};

const createSession = async requestToken => {
  try {
    const response = await fetch(
      `${BASE_URL}/authentication/session/new?api_key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          request_token: requestToken
        })
      }
    );
    if (!response.ok) {
      throw new Error("Something is wrong!");
    }

    const resData = await response.json();

    return resData.session_id;

  } catch (e) {
    throw e;
  }
};

const getUserData = async (sessionId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
      );

      if (!response.ok) {
        throw new Error("Something is wrong!");
      }

      return await response.json();

      
    } catch (e) {
      throw e;
    }
  
};

export const transformd_entered_data = (username, password) => {
  return async dispatch => {
    try {
      // const response1 = await fetch(
      //   `https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`
      // );
      // const resData = await response1.json();
      // if (!response1.ok) {
      //   throw new Error("Some thing is going wrong.");
      // }
      // const response2 = await fetch(
      //   `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${key}`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       username,
      //       password,
      //       request_token: resData.request_token
      //     })
      //   }
      // );
      // if (!response2.ok) {
      //   throw new Error("Some thing is going wrong.");
      // }
      // const response3 = await fetch(
      //   `https://api.themoviedb.org/3/authentication/session/new?api_key=${key}`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       request_token: resData.request_token
      //     })
      //   }
      // );
      // const resData3 = await response3.json();
      // if (!response3.ok) {
      //   throw new Error("Some thing is going wrong.");
      // }
      // const response4 = await fetch(
      //   `https://api.themoviedb.org/3/account?api_key=${key}&session_id=${resData3.session_id}`
      // );
      // const resData4 = await response4.json();
      // if (!response4.ok) {
      //   throw new Error("Some thing is going wrong.");
      // }
      // dispatch({
      //   type: "login",
      //   session_id: resData3.session_id,
      //   request_token: resData.request_token,
      //   global: resData4
      // });
    } catch (error) {
      throw error;
    }
  };
};

export const give_movie_data = () => {
  const page = "1";
  const language = "en-US";

  return async Dispatch => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${language}&page=${page}`
      );
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Some thing is going wrong.");
      }

      // console.log(resData.results.length);

      Dispatch({
        type: "recive_movie_data",
        data: resData.results
      });
    } catch (error) {
      throw error;
    }
  };
};
