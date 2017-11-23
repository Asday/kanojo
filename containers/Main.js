import React from 'react'
import { connect } from 'react-redux';

import DemoText from '../components/DemoText'
import DemoText2 from '../components/DemoText2'
import { isLoadingSelector } from '../selectors/listing'

const select = (state) => ({
  isLoading: isLoadingSelector(state),
})

export class Main extends React.Component {
  render = () => {
    const {
      isLoading,
    } = this.props

    return (
      isLoading ? <DemoText /> : <DemoText2 />
    )
  }
}

export default connect(select)(Main)
