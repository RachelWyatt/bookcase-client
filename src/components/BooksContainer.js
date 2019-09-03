import React from 'react'
import BookForm from './BookForm.js'
import { Link } from 'react-router-dom'

const BooksContainer = (props) => {
if (props.bookcases.length > 1) {
    const bookcase = props.bookcases.filter( bookcase => bookcase.id === props.match.params.id)[0]
    const books = bookcase.attributes.books.map(b => (
        <div class="book " key={b.id} style={
            {backgroundColor: `#${b.spine_color}`}
            } >
            <h2>{b.title}</h2>
            <h3>{b.author}</h3>

        </div>))
            return (
                <div>
                    <h2>{bookcase.attributes.name}</h2>
                    <div class = "bookshelf">
                        {books} <br/>
                    </div>
                    <BookForm bookcase={bookcase} bookcaseId = {bookcase.id} history={props.history} />
                </div>
            )
} else return <p>Loading...</p>

}


export default BooksContainer