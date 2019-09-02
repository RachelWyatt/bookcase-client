import React from 'react'

const BookForm = () => {

    return (
        < form>
            <input placeholder="Title" name="name" type="text" /> <br/>
            <input placeholder="Author" name="author" type="text" /><br/>
            <input placeholder="Page count" name="page-count" type="integer" /><br/>
            <input placeholder="Spine color" name="spine-color" type="text" /><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
    }

export default BookForm
