const initialState = {
  request_token: null,
};

const store1 = (state = initialState, action) => {
  switch (action.type) {
    case "newLogin":
      return {
        ...state,
        request_token: action.request_token,
      };
    default:
      return state;
  }
};

export default store1;
