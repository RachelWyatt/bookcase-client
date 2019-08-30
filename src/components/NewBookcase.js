import React from 'react'
import { connect } from 'react-redux'
import { updateBookcaseForm } from '../actions/bookcaseForm.js'
import { buildBookcase } from '../actions/bookcaseForm.js'

const BookcaseForm = ({ formData, history, updateBookcaseForm, buildBookcase }) => {
    const { name } = formData

    const handleInputChange = event => {
        const { name, value } = event.target
        updateBookcaseForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        buildBookcase(formData)
    }

    return (
        < form onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} name="name" type="text" onChange={handleInputChange}/>
            <input type="submit" value="Submit"/>
        </form>
    )
    }

    const mapStateToProps = state => {
        return {
            formData: state.bookcaseForm
        }
}

export default connect(mapStateToProps, { updateBookcaseForm, buildBookcase })(BookcaseForm)
// { updateBookcaseForm, buildBookcase } is shorthand syntax for MapDispatchtoProps