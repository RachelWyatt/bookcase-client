import React from 'react';
import BookcasesContainer from './components/BookcasesContainer.js'
import NewBookcase from './components/NewBookcase.js'
import NavBar from './components/NavBar.js'
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
          <NavBar />
          <h1> Bookcase Builder </h1>
          < BookcasesContainer />
          <Route exact path= '/bookcases/new' component={ NewBookcase }/>
      </div>
    </Router>
  );
  }
}

export default (connect(null, { getMyBookcases })(App));
