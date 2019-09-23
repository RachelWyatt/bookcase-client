import React from 'react'
import { applyMiddleware } from 'redux'

const Books = (props) => {
 
    const determineBookWidth = (page_count) => {
        if (page_count > 300) {
            return page_count/8 + `px`
        } else {return `40px`}
    }

    if (props.props.bookcases.length > 1) {
        const bookcase = props.props.bookcases.filter( bookcase => bookcase.id === props.props.match.params.id)[0]
        const books = bookcase.attributes.books.map(b => (
            <div className="book " key={b.id} style={
                    {backgroundColor: `#${b.spine_color}`,
                    width: determineBookWidth(b.page_count),
                    verticalAlign: `middle`
                    }
                } >
                <div className="book-title">{b.title}</div>
                <div className="book-author">{b.author}</div>
            </div>))
            
                return (
                    <div>
                    <h2 className="ml-5">{bookcase.attributes.name}</h2>
                        <div className = "bookshelf">
                            {books} <br/>
                        </div>
                </div>
                )
    } else return <p>Loading...</p>

}

export default Books