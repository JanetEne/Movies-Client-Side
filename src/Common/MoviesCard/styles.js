import styled from '@emotion/styled'

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
  position: relative;
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
`

export const StyledImage = styled.img`
  display: block;
  filter: grayscale(100%);
  transition: 0.5s filter ease;
  max-width: 100%;
  height: 400px;
`

export const TitleContainer = styled.div`
  position: absolute;
  z-index: 30;
  top: 54%;
  bottom: auto;
  transform: translateY(-50%);
  width: 50%;
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  color: #ddd;
  padding: 5px;
  transition: 1s max-height ease-out, 0.4s 0.1s bottom ease-out;
`

export const Title = styled.h6`
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.5;
  margin: 0;
`

export const DescriptionContainer = styled.h4`
  top: -30px;
  transition: 1s max-height ease-out, 0.6s opacity ease-out, 0.4s top ease-out;
  position: relative;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  line-height: 0.3;
  opacity: 0.7;
  margin: 3px 0;
`
