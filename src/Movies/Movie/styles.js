import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #051c2b;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const StyledImage = styled.img`
  width: 400px;
  height: 500px;
  padding: 30px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
    padding: 25px;
  }

  @media only screen and (max-width: 600px) {
    width: 375px;
    height: 450px;
    padding: 20px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    margin-left: 20px;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 28px;
  }
`

export const GenreContainer = styled.div`
  display: flex;
`
export const Genre = styled.div`
  color: white;
  font-size: 30px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`

export const Year = styled.div`
  color: white;
  margin-left: 5px;
  font-size: 28px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
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
  margin-left: 4px;
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

export const RateThis = styled.span`
  color: white;
  margin-left: 5px;
  line-height: 29px;
  font-weight: bold;
`

export const AvgRating = styled.div`
  color: white;
  margin-left: 5px;
  line-height: 29px;
  font-weight: bold;
`

export const StyledButton = styled(Button)`
  width: 150px;
  margin-top: 15px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (max-width: 600px) {
    margin-left: -10px;
    margin-right: 10px;
  }
`

export const EditButton = styled.div`
  width: 150px;
  height: 40px;
  background-color: gray;
  margin-top: 15px;
  color: white;
  padding: 8px 60px;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    width: 120px;
    padding: 6px 45px;
  }
`
