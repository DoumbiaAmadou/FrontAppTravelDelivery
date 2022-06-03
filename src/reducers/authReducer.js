export const STORE_USER="STORE_USER"
export const DISCONNECT_USER="DISCONNECT_USER"
let initialAuth ={isConnected : false , user : undefined} ; 
 


let getLocalAuth= ()=>{
  let auth = localStorage.getItem('AUTH'); 
  console.log('auth',auth ); 
  if(auth)
    return JSON.parse(auth); 
  else
    return initialAuth ;
}
let currentAuth =getLocalAuth(); 
let AuthReducer = ( state = currentAuth, action ) =>{
    switch(action.type){
        case STORE_USER : 
        console.log('store element ',action.payload)
            var newUser ={...state, user: action.payload, isConnected : true };  
            localStorage.setItem('AUTH' , JSON.stringify(newUser)); 
            return newUser
        case DISCONNECT_USER: 
            localStorage.removeItem('AUTH')
            return { ...state , ...initialAuth }
        default:
            return state 
    }   
}

export default AuthReducer; 