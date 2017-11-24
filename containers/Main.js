import React from 'react'
import { connect } from 'react-redux';

import ListingScreen from '../containers/ListingScreen'
import Splash from '../components/Splash'
import { isLoadingSelector } from '../selectors/listing'

const select = (state) => ({
  isLoading: isLoadingSelector(state),
})

export class Main extends React.Component {
  render = () => {
    const {
      isLoading,
    } = this.props

    return (
      isLoading ? <Splash /> : <ListingScreen />
    )
  }
}

export default connect(select)(Main)
