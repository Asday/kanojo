import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import Main from './Main'
import ReaderScreen from './ReaderScreen'
import { appNavigationSelector } from '../selectors/navigation'

const select = (state) => ({
  appNavigation: appNavigationSelector(state),
})

export const AppNavigator = StackNavigator({
  Main: { screen: Main },
  ReaderScreen: { screen: ReaderScreen },
})

export class AppNavigation extends React.Component {
  render = () => {
    const {
      dispatch,
      appNavigation,
    } = this.props

    return (
      <AppNavigator
        navigation={ addNavigationHelpers({ dispatch, state: appNavigation }) }
      />
    )
  }
}

export default connect(select)(AppNavigation)
