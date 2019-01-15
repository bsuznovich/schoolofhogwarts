const initialState = {
    email: '',
    id:''
}

const GET_USER_DATA = 'GET_USER_DATA'

export function getUserData(id,email){
    return{
        type: GET_USER_DATA,
        payload: {
            id: id,
            email: email
        }
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_USER_DATA:
                return{...state, user: action.payload}
        default:
        return state
    }
}