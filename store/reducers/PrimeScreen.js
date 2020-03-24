initialState = {
  now_playing: null,
  popular: null,
  top_rated:null

};

const store2 = (state = initialState, action) => {
  switch (action.type) {
    case "recive_movie_data":
      if (action.CategoryType === "now_playing") {
        return {...state,now_playing:action.data
         };
      }
      if(action.CategoryType === "popular"){
        return {...state,popular:action.data
        }; 
      }
      if(action.CategoryType === "top_rated"){
       
        return {...state,top_rated:action.data
        }; 
      }
  }

  return state;
};

export default store2;
