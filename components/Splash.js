import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default class Splash extends React.Component {
  render = () => (
    <Image
      source={ require('../img/splash.jpg') }
      style={ styles.image }
    />
  )
}

const styles = StyleSheet.create({
  // TODO:  Align image top.
  image: {
    flex: 1,
    width: null,
    height: null,
  },
})
