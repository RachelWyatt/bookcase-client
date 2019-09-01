import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Bookcases = props => {
      const bookcaseCards = props.bookcases.map(b => <li><Link to={`/bookcases/${b.id}`}>{b.attributes.name}</Link></li>)
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