import React from 'react';
import BookcaseContainer from './components/BookcaseContainer.js'
import { getMyBookcases } from './actions/bookcases.js'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getMyBookcases()
  }
  render(){
  return (
    <div className="App">
      <h1> Bookcase Builder </h1>
      < BookcaseContainer />
        <h3> New Bookcase Option </h3>
      <h2> To be built: Books Container </h2>
        <ul>
          <li>Show books from selected bookcase</li>
        </ul>
        <h3>New Book Option</h3>
    </div>
  );
  }
}

export default (connect(null, { getMyBookcases })(App));
