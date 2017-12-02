import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { loadListings } from './actions/listing'
import Navigation from './containers/Navigation'
import { root } from './reducers'

const store = createStore(root, applyMiddleware(thunk))
store.dispatch(loadListings())

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation />
      </Provider>
    )
  }
}
