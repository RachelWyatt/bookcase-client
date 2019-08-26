import React from 'react';
import { connect } from 'react-redux'
import BookcaseCard from './BookcaseCard.js'

const Bookcases = props => {
      const bookcaseCards = props.bookcases.map(b => <BookcaseCard bookcase={b} key={b.id}/>)
      return (
        bookcaseCards
      )
  }

  const mapStateToProps = (state) => {
    return {
      bookcases: state.myBookcases
    }
  }
  
  export default connect(mapStateToProps)(Bookcases)