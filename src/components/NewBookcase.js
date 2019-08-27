import React from 'react'
import { connect } from 'react-redux'
import { updateBookcaseForm } from '../actions/bookcaseForm.js'

const BookcaseForm = ({ bookcaseFormData, updateBookcaseForm }) => {

const handleInputChange = event => {
    const { name, value } = event.target
    const updatedBookcaseForm = {
        ...bookcaseFormData,
        [name]: value
    }
    updateBookcaseForm(updatedBookcaseForm)
}

const handleSubmit = event => {
    event.preventDefault()
    //buildBookcase(bookcaseFormData)
}

return (
    < form onSubmit={handleSubmit}>
        <input placeholder="Bookcase Name" value={bookcaseFormData} name="bookcase-name" type="text" onChange={handleInputChange}/>
        <input type="submit" value="Submit"/>
    </form>
)
}

const mapStateToProps = state => {
    return {
        bookcaseFormData: state.BookcaseForm
    }
}

export default connect(mapStateToProps, { updateBookcaseForm })(BookcaseForm)
