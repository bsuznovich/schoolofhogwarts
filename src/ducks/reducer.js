const initialState = {
    user: {}
}

const GET_USER_DATA = 'GET_USER_DATA'
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
const UPDATE_PICTURE = 'UPDATE_PICTURE'


export function getUserData(userInfo){
    return{
        type: GET_USER_DATA,
        payload: userInfo
    }
}

export function updateUserInfo(newInfo, prop){
    return{
        type: UPDATE_USER_DATA,
        payload: {[prop]: newInfo}
    }
}

export function updatePicture(pic){
    return{
        type: UPDATE_PICTURE,
        payload: {studentpicture: pic}
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_USER_DATA:
                return{...state, user: action.payload}
        case UPDATE_USER_DATA:
                return{...state, user: {...state.user, ...action.payload}}  
        case UPDATE_PICTURE:
                return{...state, user: {...state.user, ...action.payload}}      
        default:
        return state
    }
}