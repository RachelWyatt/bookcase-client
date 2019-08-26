import React from 'react'

const BookcaseCard = ({bookcase}) => {
    return (
        <li> {bookcase.attributes.name } </li>
    )
}

export default BookcaseCard