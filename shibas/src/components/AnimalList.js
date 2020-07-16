import React from 'react'
import { connect } from 'react-redux'

const AnimalList = props => {
    return (
        <div className='list-container'>
            {props.isLoading ? (<h3>Please wait while we get your images!</h3>): (<h3>I bet you want to see some cute animal pictures...Make a selection!</h3>)}
            {props.imageURLs.length > 0 && props.imageURLs.map(
                        image => { return (
                                <a href={image} target='#'>
                                    <img key={image} src={image} alt='A cute animal!'/>
                                </a>
                                )}
                    )
            }
        </div>
    )
} 


const mapStateToProps = state => {
    return {
        isLoading:state.isLoading,
        error:state.error,
        imageURLs:state.imageURLs
    }
}
export default connect(mapStateToProps, {})(AnimalList)