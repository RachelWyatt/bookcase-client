import React from 'react'
import { connect } from 'react-redux'
import { updateBookForm } from '../actions/bookForm.js'
import { addBook } from '../actions/bookForm.js'

const BookForm = ( {formData, updateBookForm, bookcaseId, addBook}) => {
    const { title, author, pageCount, spineColor } = formData
    const handleChange = event => {
        const {name, value} = event.target
        updateBookForm(name, value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        addBook(formData)
    }
    return (
        < form onSubmit={handleSubmit}>
            <input placeholder="Title" name="title" type="text" onChange={handleChange}/> <br/>
            <input placeholder="Author" name="author" type="text" onChange={handleChange}/><br/>
            <input placeholder="Page count" name="pageCount" type="integer" onChange={handleChange}/><br/>
            <input placeholder="Spine color" name="spineColor" type="text" onChange={handleChange}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
    }

    const mapStateToProps = state => {
        const bookcaseId = state.myBookcases.id
        return {
          formData: state.bookForm,
          bookcaseId: bookcaseId
        }
      }
      

export default connect(mapStateToProps, { updateBookForm, addBook })(BookForm)
