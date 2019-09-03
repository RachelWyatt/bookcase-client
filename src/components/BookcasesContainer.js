import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Bookcases = props => {
  if (props.bookcases.length > 1) {
      const bookcaseCards = props.bookcases.map(b => (<li key={b.id}><Link to={`/bookcases/${b.id}`}>{b.attributes.name}</Link></li>))
      return (
        bookcaseCards
      )
  } else return <p>Loading...</p>
  }

  const mapStateToProps = (state) => {
    return {
      bookcases: state.myBookcases
    }
  }
  
  export default connect(mapStateToProps)(Bookcases)