import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Listing from '../components/Listing'
import Spinner from '../components/Spinner'
import { isLoadingSelector } from '../selectors/listing'

const select = (state) => ({
  isLoading: isLoadingSelector(state),
})

export class ListingScreen extends React.Component {
  render = () => {
    const {
      isLoading,
    } = this.props

    return (
      <View style={ styles.view } >
        <Search />
        <Listing style={ styles.listing } />
        { isLoading && <Spinner style={ styles.spinner } />}
      </View>
    )
  }
}

export default connect(select)(ListingScreen)

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})
