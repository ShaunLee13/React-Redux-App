import { FORM_SUBMIT_STARTS, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAILS } from '../actions/index'

export const initialState = {
    imageURLs:[],
    isLoading:false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FORM_SUBMIT_STARTS:
            return {
                ...state,
                isLoading: true,
                imageURLs: [],
                error:''
            }
        case FORM_SUBMIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                imageURLs: action.payload,
                error:''
            }
        case FORM_SUBMIT_FAILS:
            return {
                ...state,
                isLoading: false,
                imageURLs: [],
                error:action.payload
            }
        default:
            return state
    }
}