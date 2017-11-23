import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../styles/DemoText'

export default class DemoText extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>Semicolons are for nerds.</Text>
      </View>
    )
  }
}
