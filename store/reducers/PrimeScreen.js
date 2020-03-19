initialState={
    data:null
}


const store2=(state=initialState,action)=>{

    switch (action.type) {
        case 'recive_movie_data':
            
        return{...state,data:action.data
            
        };


        
           
    }
    return state;
}

export default store2;