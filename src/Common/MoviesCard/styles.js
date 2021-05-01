import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 300px;
  height: 350px;
  `

export const ImageContainer = styled.div`
  transition: 0.5s z-index ease-in-out;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover h4 {
    top: 0;
  }
`

export const InnerImageWrap = styled.div`
  width: 300px;
  height: 350px;
  padding: 3px;
  overflow: hidden;
  transition: 0.5s ease transform;
  transform: translateZ(0) scale(1);

  &:hover {
    transform: translateZ(0) scale(1.25);
    z-index: 2;
  }

  @media only screen and (max-width: 600px) {
    width: 390px;
  }
`

export const StyledImage = styled.img`
  display: block;
  filter: grayscale(100%);
  transition: 0.5s filter ease;
  max-width: 100%;
  height: 400px;

  @media only screen and (max-width: 600px) {
    width: 500px;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
`

export const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  margin-left: 5px;
`
