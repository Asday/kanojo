import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Listing extends React.Component {
  render = () => (
    <View style={ styles.view }>
      <Text>
        Listing goes here.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})
