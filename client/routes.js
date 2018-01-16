import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import {Main} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render () {

    return (
      <Router history={history}>
      <div>      
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
      </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Routes)


