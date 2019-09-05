import React from 'react'
import { connect } from 'react-redux'
import { createBook, addBook, updateBookForm } from '../actions/bookForm.js'

const BookForm = ({formData, history, updateBookForm, createBook}) => {
    const bookcaseID = 1
    const handleChange = event => {
        event.preventDefault()
        const {name, value} = event.target
       updateBookForm(name, value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        createBook(formData, bookcaseID, history)
    }
    
    return (
        <div class="ml-5">
        <h2>Add a Book</h2>
        < form onSubmit={handleSubmit}>
            <div class="form-group row">
                <label for="bookFormTitleInput" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-6">
                    <input placeholder="Title" class="form-control" name="title" value={formData.title} type="text" onChange={handleChange}/> 
                </div>
            </div>
            <div class="form-group row" >
                <label for="bookFormAuthorInput" class="col-sm-2 col-form-label">Author</label>
                <div class="col-sm-6">
                    <input placeholder="Author"  class="form-control" name="author" value={formData.author} type="text" onChange={handleChange}/>
                </div>
            </div>
            <div class="form-group row" >
                <label for="bookFormPageCountInput" class="col-sm-2 col-form-label">Page Count</label>
                <div class="col-sm-6">
                    <input placeholder="Page count"  class="form-control"  name="pageCount" value={formData.pageCount} type="integer" onChange={handleChange}/>
                </div>
            </div>
            <div class="form-group row" >
                <label for="bookFormSpineColorInput" class="col-sm-2 col-form-label">Spine Color</label>
                <div class="col-sm-6">
                    <input placeholder="Spine color"  class="form-control"  name="spineColor" value={formData.spineColor} type="text" onChange={handleChange}/>
                </div>
            </div>
            <input type="submit" value="Submit" class="btn btn-outline-dark"/>
        </form>
        </div>
    )
        
}
    
const mapStatetoProps = state => {
    return {
        formData: state.bookForm
       // bookcaseID: state.myBookcases.id
    }
}

export default connect(mapStatetoProps, {updateBookForm, createBook, addBook})(BookForm)
