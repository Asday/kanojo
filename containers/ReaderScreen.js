import React from 'react'
import { BackHandler, Text } from 'react-native'
import {
  DrawerNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation'
import { connect } from 'react-redux'

import PageNavigation from '../components/PageNavigation'
import Reader from '../components/Reader'
import { readerNavigationSelector } from '../selectors/navigation'

const select = (state) => ({
  readerNavigation: readerNavigationSelector(state),
})

export const ReaderNavigator = DrawerNavigator(
  {
    Reader: { screen: Reader },
  },
  {
    contentComponent: PageNavigation,
    backBehaviour: 'none',
  },
)

export class ReaderScreen extends React.Component {
  componentWillMount = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBack
    )
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBack
    )
  }

  handleBack = () => {
    const {
      dispatch,
    } = this.props

    dispatch(NavigationActions.back())
    return true
  }

  render = () => {
    const {
      dispatch,
      readerNavigation,
    } = this.props

    return (
      <ReaderNavigator
        navigation={
          addNavigationHelpers({ dispatch, state: readerNavigation })
        }
      />
    )
  }
}

export default connect(select)(ReaderScreen)
