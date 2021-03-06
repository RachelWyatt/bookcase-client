import React from 'react';
import BookcasesContainer from './components/BookcasesContainer.js'
import BooksContainer from './components/BooksContainer.js'
import NewBookcase from './components/BookcaseForm.js'
import BookForm from './components/BookForm.js'
import NavBar from './components/NavBar.js'
import { getMyBookcases } from './actions/bookcases.js'
import { connect } from 'react-redux'
import { Route, withRouter, Switch} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getMyBookcases()
  }

  render(){
    return (
        <div className="App">
            <NavBar />
            <h1 className="ml-2"> Virtual Bookcase </h1>
            <Switch>
              <Route exact path= '/bookcases' component={ BookcasesContainer }/>
              <Route exact path= '/bookcases/new' component={ NewBookcase }/>
              <Route exact path= '/bookcases/:id' render={ (routerProps) =>
                <BooksContainer {...routerProps} bookcases={this.props.myBookcases} />
              }/>
              <Route exact path= '/bookcases/:id/books/new' render={ (routerProps) => 
                <BookForm {...routerProps}/> 
              }/>
            </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    myBookcases: state.myBookcases
  })
}

export default withRouter(connect(mapStateToProps, { getMyBookcases })(App));
