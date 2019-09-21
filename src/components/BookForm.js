import React from 'react'
import { connect } from 'react-redux'
import { createBook, addBook, updateBookForm } from '../actions/bookForm.js'

const BookForm = ({formData, history, updateBookForm, createBook, bookcaseID}) => {
    
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
        <div className="ml-5">
        <h2>Add a Book</h2>
        < form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label for="bookFormTitleInput" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-6">
                    <input placeholder="Title" className="form-control" name="title" value={formData.title} type="text" onChange={handleChange}/> 
                </div>
            </div>
            <div className="form-group row" >
                <label for="bookFormAuthorInput" className="col-sm-2 col-form-label">Author</label>
                <div className="col-sm-6">
                    <input placeholder="Author"  className="form-control" name="author" value={formData.author} type="text" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group row" >
                <label for="bookFormPageCountInput" className="col-sm-2 col-form-label">Page Count</label>
                <div className="col-sm-6">
                    <input placeholder="Page count"  className="form-control"  name="pageCount" value={formData.pageCount} type="integer" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group row" >
                <label for="bookFormSpineColorInput" className="col-sm-2 col-form-label">Spine Color</label>
                <div className="col-sm-6">
                    <input placeholder="Spine color"  className="form-control"  name="spineColor" value={formData.spineColor} type="text" onChange={handleChange}/>
                </div>
            </div>
            <input type="submit" value="Submit" className="btn btn-outline-dark"/>
        </form>
        </div>
    )
        
}
    
const mapStatetoProps = state => {
    return {
        formData: state.bookForm
    }
}

export default connect(mapStatetoProps, {updateBookForm, createBook, addBook})(BookForm)
