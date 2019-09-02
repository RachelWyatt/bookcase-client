import React from 'react'
import BookForm from './BookForm.js'
import { Link } from 'react-router-dom'

class BooksContainer extends React.Component {
     books = this.props.bookcase.attributes.books.map(b => (
        <div class="book " key={b.id} style={
            {backgroundColor: `#${b.spine_color}`}
            } >
            <h2>{b.title}</h2>
            <h3>{b.author}</h3>

        </div>))
        render(){
    return (
        <div>
            <h2>{this.props.bookcase.attributes.name}</h2>
            <div class = "bookshelf">
                {this.books} <br/>
            </div>
            <BookForm bookcase={this.props.bookcase} history={this.props.history} />
        </div>
    )
}
}

export default BooksContainer