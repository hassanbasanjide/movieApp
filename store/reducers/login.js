

const initialstate={
    session_id:null,
    request_token:null,
    global:null,
    loginStart:false
    
};

const store1=(state=initialstate,action)=>{

    switch (action.type) {
        case 'login':
            
        return{...state,
            request_token:action.request_token,
            session_id:action.session_id,
            global:action.global,
            loginStart:true
        };
           
    }
    return state;
}

export default store1;