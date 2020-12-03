import styled from '@emotion/styled'

export const Container = styled.div`
  width: 350px;
  height: 500px;
`

export const ImageContainer = styled.div`
  transition: 0.5s z-index ease-in-out;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover h6 {
    top: 40%;
    opacity: 1;
  }
`

export const InnerImageWrap = styled.div`
  position: relative;
  width: 440px;
  height: 500px;
  padding: 50px;
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

export const Title = styled.h6`
  position: absolute;
  top: 80%;
  display: block;
  left: 10%;
  margin: 0;
  padding: 5px 10px;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  text-transform: capitalize;
  word-wrap: break-word;
  color: #fff;
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.3s ease-out;
`
