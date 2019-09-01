import React from 'react'


const BookcaseCard = ({bookcase}) => {
    console.log(bookcase)
    return (
        <div>
            <p>{bookcase.attributes.name}</p>
        </div>
    )
}

export default BookcaseCard