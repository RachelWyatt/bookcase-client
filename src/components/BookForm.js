import React from 'react'
import { connect } from 'react-redux'
import { updateBookForm } from '../actions/bookForm.js'

const BookForm = ( {formData, updateBookForm}) => {
    const { title, author, pageCount, spineColor } = formData
    return (
        < form>
            <input placeholder="Title" name="name" type="text" value={title}/> <br/>
            <input placeholder="Author" name="author" type="text" /><br/>
            <input placeholder="Page count" name="page-count" type="integer" /><br/>
            <input placeholder="Spine color" name="spine-color" type="text" /><br/>
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
