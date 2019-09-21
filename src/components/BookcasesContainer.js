import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Bookcases = props => {
  if (props.bookcases.length > 1) {
      const bookcaseCards = props.bookcases.map(b => (<li className="list-group-item"><Link to={`/bookcases/${b.id}`} >{b.attributes.name}</Link></li>))
      return (
        <div>
        <h2 className="ml-5">Bookcases </h2>
        <ul className="list-group ml-5">
          {bookcaseCards}
          </ul>
        </div>
      )
  } else return <p>Loading...</p>
  }

  const mapStateToProps = (state) => {
    return {
      bookcases: state.myBookcases
    }
  }
  
  export default connect(mapStateToProps)(Bookcases)