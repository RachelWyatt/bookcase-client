import React from 'react'


const BookcaseCard = ({bookcase}) => {
    const books = bookcase.attributes.books.map(b => (<li key={b.id}>{b.title}</li>))
    return (
        <div>
            {books}
        </div>
    )
}

export default BookcaseCard