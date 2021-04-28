import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { StyledImage } from './styles'

class Slide extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
      ]
    }
    const { slides } = this.props
    return (
      <div>
        <Slider {...settings}>
          {slides.map((slide) => (
            <Link to={`movies/${slide.id}`}>
              <StyledImage key={slide.id} src={slide.img} alt="image" />
            </Link>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Slide
