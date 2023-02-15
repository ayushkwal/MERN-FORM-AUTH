export const initialState = null;

export const reducer = (state,action)=>{
    if(action.type==='USER'){
        console.log(action.payload)
        localStorage.setItem('userId',action.payload._id)
        return action.payload
    }else{
        return state
    }
}