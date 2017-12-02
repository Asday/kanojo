import React from 'react'
import { BackHandler, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

export class Reader extends React.Component {
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

  render = () => (
    <Text>Reader</Text>
  )
}

export default connect()(Reader)
