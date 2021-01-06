import React from 'react'
import Slider from 'react-slick'
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
			pauseOnHover: true
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <StyledImage
              src="https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg?region=0,0,800,1200"
              alt="taken"
            />
          </div>
          <div>
            <StyledImage
              src="https://www.assignmentx.com/wp-content/uploads/2020/07/THE-OLD-GUARD-poster.jpg"
              alt="taken"
            />
          </div>
          <div>
            <StyledImage
              src="https://img1.od-cdn.com/ImageType-100/0293-1/%7B2250F6C6-E95B-4FB9-9DFE-DAEED965C2DC%7DImg100.jpg"
              alt="taken"
            />
          </div>
          <div>
            <StyledImage
              src="https://static.vibe.com/files/2019/05/the-intruder-movie-poster-1556821590.jpg"
              alt="taken"
            />
          </div>
          <div>
            <StyledImage
              src="https://lh3.googleusercontent.com/proxy/rJqNwOAoOmfZwiAZzJLaPhB8X6f8JHF_PnNDbn6Bv2PPcdncyNjYBWMBKjfwbbJ2e4i5fxzi2gRggk2yy3iNvicbPuzIRLsOXTihdkdoeQHVzp7_gjGbywC-hHz5lEw"
              alt="taken"
            />
          </div>
          <div>
            <StyledImage
              src="https://images-na.ssl-images-amazon.com/images/I/A1EVlLa--EL.jpg"
              alt="taken"
            />
          </div>
        </Slider>
      </div>
    )
  }
}

export default Slide
