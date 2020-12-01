/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 500px;
  height: 500px;
`

export const ImageContainer = styled.div`
  position: absolute;
  left: 0%;
  top: 0px;
  float: left;
  display: block;
  overflow: visible;
  margin: 0.5%;
  transition: 0.5s z-index ease-in-out;
  margin-top: 70px;
  
  &:hover img {
    filter: grayscale(0);
  }

  &:hover h6 {
    top: 90%;
    opacity: 1;
  }
`

export const InnerImageWrap = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  padding: 50px;
  overflow: hidden;
  transition: 0.5s ease transform;
  transform: translateZ(0) scale(1);

  &:hover {
    transform: translateZ(0) scale(1.25);
  }
`

export const StyledImage = styled.img`
  position: relative;
  z-index: 10;
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
  width: 80%;
  margin: 0;
  padding: 5px 10px;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  text-transform: capitalize;
  word-wrap: break-word;
  color: #fff;
  opacity: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.3s ease-out all;
  transition: 0.3s ease-out;
`
