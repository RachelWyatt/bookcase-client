import React from 'react'
import { connect } from 'react-redux'
import { updateBookForm } from '../actions/bookForm.js'

const BookForm = ( {formData, updateBookForm}) => {
    const { title, author, pageCount, spineColor } = formData
    const handleChange = event => {
        const {name, value} = event.target
        updateBookForm(name, value)
    }
    return (
        < form>
            <input placeholder="Title" name="title" type="text" onChange={handleChange}/> <br/>
            <input placeholder="Author" name="author" type="text" onChange={handleChange}/><br/>
            <input placeholder="Page count" name="pageCount" type="integer" onChange={handleChange}/><br/>
            <input placeholder="Spine color" name="spineColor" type="text" onChange={handleChange}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
    }

    const mapStateToProps = state => {
        return {
          formData: state.bookForm
        }
      }
      

export default connect(mapStateToProps, { updateBookForm })(BookForm)
