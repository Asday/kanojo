import React from 'react'
import { connect } from 'react-redux'

import ListingScreen from './ListingScreen'
import Splash from '../components/Splash'
import { isAnyLoadedSelector } from '../selectors/listing'

const select = (state) => ({
  isAnyLoaded: isAnyLoadedSelector(state),
})

export class Main extends React.Component {
  render = () => {
    const {
      isAnyLoaded,
    } = this.props

    return (
      isAnyLoaded ? <ListingScreen /> : <Splash />
    )
  }
}

export default connect(select)(Main)
