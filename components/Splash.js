import React from 'react'
import { Image, View } from 'react-native'

import { styles } from '../styles/Splash'

export default class Splash extends React.Component {
  render = () => (
    <View style={ styles.view }>
      <Image
        source={ require('../img/splash.jpg') }
        style={ styles.image }
      />
    </View>
  )
}
