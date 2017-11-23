import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../styles/DemoText'

export default class DemoText2 extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>More demo text is also for nerds.</Text>
      </View>
    )
  }
}
