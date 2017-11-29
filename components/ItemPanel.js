import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { read } from '../actions/listing'

const action = (dispatch) => bindActionCreators({
  read: read,
}, dispatch)

export class ItemPanel extends React.Component {
  clicked = () => {
    const {
      item,
      read,
    } = this.props

    read(item)
  }

  render = () => {
    const {
      URL,
      coverURL,
      title,
    } = this.props.item

    return (
      <TouchableHighlight onPress={ this.clicked }>
        <View>
          <Image style={ styles.image } source={ { uri: coverURL } } />
          <Text>{ title }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default connect(null, action)(ItemPanel)

const styles = StyleSheet.create({
  image: {
    // TODO:  This sucks.
    width: 210,
    height: 297,
  },
})
