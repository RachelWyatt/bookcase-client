import React from 'react';
import BookcasesContainer from './components/BookcasesContainer.js'
import BooksContainer from './components/BooksContainer.js'
import NewBookcase from './components/NewBookcase.js'
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
    const {myBookcases} = this.props
  return (

      <div className="App">
          <NavBar />
          <h1> Bookcase Builder </h1>
          <Switch>
            <Route exact path= '/bookcases' component={ BookcasesContainer }/>
            <Route exact path= '/bookcases/new' component={ NewBookcase }/>
            <Route exact path= '/bookcases/:id' render={ props =>
              { const bookcase = myBookcases.find( bookcase => bookcase.id === props.match.params.id )
                return <BooksContainer bookcase={bookcase} {...props} />
            }
            }/>
            <Route exact path= '/bookcases/:id/books/new' component={BookForm} />
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
