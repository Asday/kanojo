import { map } from 'lodash'
import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'

import ItemPanel from './ItemPanel'

export default class Listing extends React.Component {
  render = () => {
    const {
      items,
    } = this.props

    return (
      <FlatList
        style={ styles.flatList }
        data={ items }
        keyExtractor={ (item) => item.URL }
        numColumns={ 4 }
        renderItem={ ({ item }) => <ItemPanel item={ item } /> }
      />
    )
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
})
