import React from 'react';
import { connect } from 'react-redux'

class BookcaseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rating: 0}
  }

  handleVoteUp = (e) => {
    e.preventDefault()
    this.setState({
      rating: this.state.rating + 1
    })
  }

  render() {
    let returnVal
    if(this.props.bookcase) {
      returnVal = <div>{this.props.bookcase.attributes.name}
      {this.state.rating}
      <button onClick = {this.handleVoteUp}>Vote Up</button>
      </div>
    }
    else {returnVal = "Loading"}

    return (
      returnVal
      )
    }
}
  
  export default BookcaseCard