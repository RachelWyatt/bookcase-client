import React from 'react';
import BookcasesContainer from './components/BookcasesContainer.js'
import BookcaseCard from './components/BookcaseCard.js'
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
          <Route exact path= '/bookcases/:id' render={ props =>
            {return <BookcaseCard {...props} />
          }
          }/>
      </div>
    </Router>
  );
  }
}

const mapStateToProps = state => {
  return ({
    myBookcases: state.myBookcases
  })
}

export default (connect(mapStateToProps, { getMyBookcases })(App));
