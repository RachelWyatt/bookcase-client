import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BookcaseCard from './BookcaseCard.js'

class Bookcases extends React.Component {
  
  render(){
    const bookcaseCards = this.props.bookcases.map( bookcase => <BookcaseCard bookcase={bookcase} />)
    return bookcaseCards
  }
  
}

  const mapStateToProps = (state) => {
    return {
      bookcases: state.myBookcases
    }
  }
  
  export default connect(mapStateToProps)(Bookcases)