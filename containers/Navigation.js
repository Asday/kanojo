import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import Main from './Main'
import Reader from './Reader'
import { navigationSelector } from '../selectors/navigation'

const select = (state) => ({
  navigation: navigationSelector(state),
})

export const Navigator = StackNavigator({
  Main: { screen: Main },
  Reader: { screen: Reader },
})

export class Navigation extends React.Component {
  render = () => {
    const {
      dispatch,
      navigation,
    } = this.props

    return (
      <Navigator
        navigation={ addNavigationHelpers({ dispatch, state: navigation }) }
      />
    )
  }
}

export default connect(select)(Navigation)
