import { API_KEY, BASE_URL } from '../../utils/constants';

export default (username, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Something is wrong!');
      }

      const resData = await response.json();

      const requestToken = resData.request_token;

      await validateWithLogin(username, password, requestToken);

      const sessionId = await createSession(requestToken);

      const userData = await getUserData(sessionId);

      dispatch({
        type: 'login',
        session_id: sessionId,
        request_token: requestToken,
        global: userData,
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};

const validateWithLogin = async (username, password, requestToken) => {
  try {
    const response1 = await fetch(
      `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          request_token: requestToken,
        }),
      }
    );
    if (!response1.ok) {
      throw new Error('Something is wrong!');
    }
  } catch (e) {
    console.log(`this is the error: ${e}`);
    throw e;
  }
};

const createSession = async (requestToken) => {
  try {
    const response = await fetch(
      `${BASE_URL}/authentication/session/new?api_key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request_token: requestToken,
        }),
      }
    );
    if (!response.ok) {
      throw new Error('Something is wrong!');
    }

    const resData = await response.json();

    return resData.session_id;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getUserData = async (sessionId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
    );

    if (!response.ok) {
      throw new Error('Something is wrong!');
    }

    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
};
