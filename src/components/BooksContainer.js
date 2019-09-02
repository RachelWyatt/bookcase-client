import React from 'react'
import { Link } from 'react-router-dom'

const BooksContainer = ({bookcase}) => {
    const books = bookcase.attributes.books.map(b => (
        <div class="book " key={b.id} style={
            {backgroundColor: `#${b.spine_color}`}
            } >
            <h2>{b.title}</h2>
            <h3>{b.author}</h3>

        </div>))
    return (
        <div>
            <div class = "bookshelf">
                {books} <br/>
            </div>
            <Link to={`/bookcases/${bookcase.id}/books/new`} class="myButton"> Add a Book to this Bookcase </Link>
        </div>
    )
}

export default BooksContainer