import React from 'react'
import { Link } from 'react-router-dom'

const BookcaseCard = ({bookcase}) => {
    return (
        <li> <Link to ={`/bookcases/${bookcase.id}`}>{bookcase.attributes.name } </Link></li>
    )
}

export default BookcaseCard