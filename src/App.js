import React from 'react';
import BookcasesContainer from './components/BookcasesContainer.js'
import NewBookcase from './components/NewBookcase.js'
import { getMyBookcases } from './actions/bookcases.js'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getMyBookcases()
  }
  render(){
  return (
    <Router>
      <div className="App">
          <h1> Bookcase Builder </h1>
          < BookcasesContainer />
          <Route exact path= '/bookcases/new' component={ NewBookcase }/>
            <h3> New Bookcase Option </h3>
            <h2> To be built: Books Container </h2>
              <ul>
                <li>Show books from selected bookcase</li>
              </ul>
            <h3>New Book Option</h3>
      </div>
    </Router>
  );
  }
}

export default (connect(null, { getMyBookcases })(App));
