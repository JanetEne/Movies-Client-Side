import styled from '@emotion/styled'

export const StyledImage = styled.img`
  width: 400px;
  height: 450px;

  &:hover {
    transform: translateZ(0) scale(1.25);
    transition: 0.5s ease transform;
  }
`
