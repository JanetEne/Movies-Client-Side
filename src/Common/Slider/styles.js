import styled from '@emotion/styled'

export const StyledImage = styled.img`
  width: 400px;
  height: 450px;

  &:hover {
    transform: translateZ(0) scale(1.25);
    transition: 0.5s ease transform;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 350px;
  }

  @media only screen and (max-width: 600px) {
    width: 150px;
    height: 200px;
  }
`
