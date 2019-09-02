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
    }
    render() {
    return (
        <div>
        <h2>Add a Book</h2>
        < form onSubmit={this.handleSubmit}>
            <input placeholder="Title" name="title" type="text" onChange={this.handleChange}/> <br/>
            <input placeholder="Author" name="author" type="text" onChange={this.handleChange}/><br/>
            <input placeholder="Page count" name="pageCount" type="integer" onChange={this.handleChange}/><br/>
            <input placeholder="Spine color" name="spineColor" type="text" onChange={this.handleChange}/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
    }
}
      

export default BookForm
