import React, { useState } from 'react'
import { connect } from 'react-redux'
import { formSubmit } from '../store/actions/index'

const initialForm = {
    imageCount:'1',
    animalType:'shibes'
}

const Header = props => {
    const [ formValues, setFormValues ] = useState(initialForm)
    const handleInput = e => {
        setFormValues({...formValues, [e.target.name] : e.target.value})
    }

    const submit = e => {
        e.preventDefault()
        props.formSubmit(formValues)
    }
    //On Form Submit, form values should update url and make axios request
    return (
        <div className='header-container'>
            <h1 className='title'>I AM THE BIRB LORD</h1>
            <form className='request-form'
            onSubmit={submit}>
                    <label>How many images do you want?&nbsp;
                        <select
                            name='imageCount'
                            value={formValues.imageCount}
                            onChange={handleInput}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </label>
                    <label>What type of pictures should we find?&nbsp;
                        <select
                            name='animalType'
                            value={formValues.animalType}
                            onChange={handleInput}>
                            <option value='shibes'>Doges</option>
                            <option value='birds'>Birbs</option>
                            <option value='cats'>Kitty Cats</option>
                        </select>
                    </label>

                    <button>Gimme them critters!</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {formSubmit})(Header)