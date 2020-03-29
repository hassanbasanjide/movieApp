const initialstate = {
  request_token: null
};

const store1 = (state = initialstate, action) => {
  switch (action.type) {
    case "newLogin":
      return {
        ...state,
        request_token: action.request_token
      };
  }
  return state;
};

export default store1;
