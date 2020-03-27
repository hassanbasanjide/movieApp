import {GET_TV_DATA} from '../actions/getTvData';

initialState = {
    on_the_air: null,
    popular: null,
    top_rated:null,
    latest:null
  
  };
  
  const tvReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TV_DATA:  
        if (action.CategoryType === "on_the_air") {          
          return {...state,on_the_air: action.data
           };
        }
        if(action.CategoryType === "popular"){
          return {...state,popular: action.data
          }; 
        }
        if(action.CategoryType === "top_rated"){
          return {...state,top_rated:action.data
          }; 
        }
        if(action.CategoryType === "latest"){
          return {...state,latest:action.data
          }; 
        }
    }
  
    return state;
  };
  
  export default tvReducer;