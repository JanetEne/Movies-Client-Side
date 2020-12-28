import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #051c2b;
`
export const StyledImage = styled.img`
  width: 400px;
  height: 500px;
  padding: 30px;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;
`

export const GenreContainer = styled.div`
  display: flex;
`
export const Genre = styled.div`
  color: white;
  font-size: 30px;
`

export const Year = styled.div`
  color: white;
  margin-left: 5px;
  font-size: 28px;
`

export const Plot = styled.div`
  margin-top: 7px;
  color: white;
  font-size: 15px;
`
export const Writers = styled.div`
  color: white;
  margin-top: 7px;
  font-size: 18px;
`

export const Cast = styled.div`
  color: white;
  font-size: 18px;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const IconContainer = styled.div`
  display: flex;
  margin-top: 5px;
`

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 3px;
  color: gold;
`

export const Rating = styled.div`
  margin-left: 10px;
  color: white;
  margin-top: -5px;
`

export const StyledHeart = styled(FontAwesomeIcon)`
  color: red;
`

export const Likes = styled.div`
  margin-left: 5px;
  color: white;
  margin-top: -5px;
`
