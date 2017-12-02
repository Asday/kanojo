import { map } from 'lodash'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ItemPanel from './ItemPanel'

export default class Listing extends React.Component {
  render = () => {
    const {
      items,
    } = this.props

    return (
      <View style={ styles.view }>
        {
          map(items, (item, key) => (
            <ItemPanel item={ item } key={ key } />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})
