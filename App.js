import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Main from './containers/Main'
import { root } from './reducers'

const store = createStore(root)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    )
  }
}
