import { noop } from 'lodash'
import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default class Search extends React.Component {
  render = () => (
    <View style={ styles.view }>
      <TextInput style={ styles.textInput } />
      <Button title='Search' onPress={ noop } />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  },
})
