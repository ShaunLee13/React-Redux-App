import axios from 'axios'

export const FORM_SUBMIT_STARTS = 'FORM_SUBMIT_STARTS'
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS'
export const FORM_SUBMIT_FAILS = 'FORM_SUBMIT_FAILS'


export const formSubmit = values => {
    return dispatch => {
        //Form is submitting
        dispatch({ type: FORM_SUBMIT_STARTS, payload: values})
        //Axios request to get images
        axios.get(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/${values.animalType}?count=${values.imageCount}&urls=true&httpsUrls=true`)
            .then(res => {
                //res.data returns our arrays of urls for images
                dispatch({ type: FORM_SUBMIT_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FORM_SUBMIT_FAILS, payload: err.message });
            })
    }
    
    
    
}