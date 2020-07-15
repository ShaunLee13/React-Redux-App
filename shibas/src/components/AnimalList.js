import React from 'react'
import { connect } from 'react-redux'

const AnimalList = props => {
    return (
        <div>
            <p>I am the AnimalList</p>
        </div>
    )
} 


const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {})(AnimalList)