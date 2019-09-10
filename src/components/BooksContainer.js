import React from 'react'
import BookForm from './BookForm.js'
import { Link } from 'react-router-dom'

const BooksContainer = (props) => {
    
    const determineBookWidth = (page_count) => {
        if (page_count > 50) {
            return page_count/10 + `px`
        } else {return `40px`}
        
    }

if (props.bookcases.length > 1) {
    console.log(props)
    const bookcase = props.bookcases.filter( bookcase => bookcase.id === props.match.params.id)[0]
    const books = bookcase.attributes.books.map(b => (
        <div className="book " key={b.id} style={
            {backgroundColor: `#${b.spine_color}`,
            width: determineBookWidth(b.page_count),
        }
            } >
            <div className="book-title">{b.title}</div>
            <div className="book-author">{b.author}</div>

        </div>))
            return (
                <div>
                    <h2 class="ml-5">{bookcase.attributes.name}</h2>
                    <div class = "bookshelf">
                        {books} <br/>
                    </div>
                    <BookForm bookcase={bookcase} bookcaseID = {bookcase.id} history={props.history} />
                </div>
            )
} else return <p>Loading...</p>

}


export default BooksContainer