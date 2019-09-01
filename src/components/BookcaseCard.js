import React from 'react'


const BookcaseCard = ({bookcase}) => {
    const books = bookcase.attributes.books.map(b => (
        <div class="book book-green" key={b.id}>
            <h2>{b.title}</h2>
            <h3>{b.author}</h3>
        </div>))
    return (
        <div class = "bookshelf">
            {books}
        </div>
    )
}

export default BookcaseCard