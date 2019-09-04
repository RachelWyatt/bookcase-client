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
        buildBookcase(formData, history)
    }

    return (
        < form onSubmit={handleSubmit}>
            <div class="form-group row">
                <div class="col-sm-6 ml-5">
                    <input placeholder="Bookcase Name" class="form-control" value={name} name="name" type="text" onChange={handleInputChange}/>
                </div>
                <input type="submit" class="btn btn-outline-dark" value="Submit"/>
            </div>
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