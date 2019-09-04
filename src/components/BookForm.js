import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/bookForm.js'

class BookForm extends React.Component {
    state = {
        title: "",
        author: "",
        pageCount: "",
        spineColor: "",
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
          })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.addBook(this.state, this.props.bookcaseId, this.props.history)
    }
    render() {
    return (
        <div class="ml-5">
        <h2>Add a Book</h2>
        < form onSubmit={this.handleSubmit}>
            <div class="form-group row">
                <label for="bookFormTitleInput" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-6">
                    <input placeholder="Title" class="form-control" name="title" value={this.props.title} type="text" onChange={this.handleChange}/> 
                </div>
            </div>
            <div class="form-group row" >
                <label for="bookFormAuthorInput" class="col-sm-2 col-form-label">Author</label>
                <div class="col-sm-6">
                    <input placeholder="Author"  class="form-control" name="author" value={this.props.author} type="text" onChange={this.handleChange}/>
                </div>
            </div>
            <div class="form-group row" >
                <label for="bookFormPageCountInput" class="col-sm-2 col-form-label">Page Count</label>
                <div class="col-sm-6">
                    <input placeholder="Page count"  class="form-control"  name="pageCount" value={this.props.pageCount} type="integer" onChange={this.handleChange}/>
                </div>
            </div>
            <div class="form-group row" >
                <label for="bookFormSpineColorInput" class="col-sm-2 col-form-label">Spine Color</label>
                <div class="col-sm-6">
                    <input placeholder="Spine color"  class="form-control"  name="spineColor" value={this.props.spineColor} type="text" onChange={this.handleChange}/>
                </div>
            </div>
            <input type="submit" value="Submit" class="btn btn-outline-dark"/>
        </form>
        </div>
        
    )
    }
}
      

export default connect(null, {addBook})(BookForm)
