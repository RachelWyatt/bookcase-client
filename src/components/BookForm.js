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
        this.props.addBook(this.state, this.props.bookcase.id)
    }
    render() {
    return (
        <div>
        <h2>Add a Book</h2>
        < form onSubmit={this.handleSubmit}>
            <input placeholder="Title" name="title" value={this.props.title} type="text" onChange={this.handleChange}/> <br/>
            <input placeholder="Author" name="author" value={this.props.author} type="text" onChange={this.handleChange}/><br/>
            <input placeholder="Page count" name="pageCount" value={this.props.pageCount} type="integer" onChange={this.handleChange}/><br/>
            <input placeholder="Spine color" name="spineColor" value={this.props.spineColor} type="text" onChange={this.handleChange}/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
    }
}
      

export default connect(null, {addBook})(BookForm)
