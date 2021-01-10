import React from 'react'
import Slider from '../Common/Slider/Slider'

class Welcome extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const { sliderData } = this.props

    return <Slider slides={sliderData} />
  }
}

export default Welcome
