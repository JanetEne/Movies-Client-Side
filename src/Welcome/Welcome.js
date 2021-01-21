import React from 'react'
import Slider from '../Common/Slider/Slider'
import { Wrap, WelcomeText, Text } from './styles'

class Welcome extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const { sliderData } = this.props

    return (
      <Wrap>
        <WelcomeText>Welcome to Movies App</WelcomeText>
        <Text>Enjoy an always-changing selection of free movies, shows, kids, entertainment and more.</Text>
        <Slider slides={sliderData} />
      </Wrap>
    )
  }
}

export default Welcome
