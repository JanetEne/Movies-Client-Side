import styled from '@emotion/styled'
import {
  FormControl,
  FormFile,
  FormLabel,
  Container,
  Button
} from 'react-bootstrap'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  display: flex;
`
export const LeftContainer = styled(Container)`
  width: 600px;
  height: 900px;
`
export const RightContainer = styled.div`
  width: 600px;
  height: 900px;
  background-image: url(http://images.fandango.com/MDCsite/images/featured/201111/posters7.jpg);
  background-size: contain;
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const FormInput = styled(FormControl)`
  background-color: gainsboro;
`

export const FileLabel = styled(FormLabel)`
  cursor: pointer;
  border: 1px dashed gray;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  padding: 20px 0;
`

export const UploadImage = styled(FormFile)`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

export const StyledButton = styled(Button)`
  margin-left: 150px;
  width: 30%;
  margin-top: 10px;
`
