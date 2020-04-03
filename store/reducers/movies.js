const initialState = {
  now_playing: null,
  popular: null,
  top_rated: null,
  latest: null,
  Rated:[]
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "recive_movie_data":
      if (action.CategoryType === "now_playing") {
        return { ...state, now_playing: action.data };
      }
      if (action.CategoryType === "popular") {
        return { ...state, popular: action.data };
      }
      if (action.CategoryType === "top_rated") {
        return { ...state, top_rated: action.data };
      }
      if (action.CategoryType === "latest") {
        return { ...state, latest: action.data };
      }
      case 'RECIVE_RATE':
      return{...state,Rated:action.data}

      return state;
  }
  return state;
};

export default movieReducer;
