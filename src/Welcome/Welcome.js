import React from 'react'
import Slider from '../Common/Slider/Slider'
import {Wrap} from './styles'

class Welcome extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const { sliderData } = this.props

    return (
<Wrap>
    <Slider slides={sliderData} />
    </Wrap>
    )
  }
}

export default Welcome
