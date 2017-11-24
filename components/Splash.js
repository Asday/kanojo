import React from 'react'
import { Image } from 'react-native'

import { styles } from '../styles/Splash'

export default class Splash extends React.Component {
  render = () => (
    <Image
      source={ require('../img/splash.jpg') }
      style={ styles.image }
    />
  )
}
