import React from 'react'
import { connect } from 'react-redux'

const Header = props => {
    return (
        <div>
            <p>I am the Header</p>
        </div>
    )
}


const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {})(Header)