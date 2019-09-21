import React from 'react'
import BookForm from './BookForm.js'
import Books from './Books.js'

const BooksContainer = (props) => {
    if (props.bookcases.length > 1) {
        const bookcase = props.bookcases.filter( bookcase => bookcase.id === props.match.params.id)[0]
                return (
                    <div>
                        <Books props = {props} history={props.history} />
                        <BookForm bookcase={bookcase} bookcaseID = {bookcase.id} history={props.history} />
                    </div>
                )
    } else return <p>Loading...</p>
}

export default BooksContainer