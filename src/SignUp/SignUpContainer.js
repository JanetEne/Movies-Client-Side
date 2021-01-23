import { connect } from 'react-redux'
import { postUser } from '../store/movies/actions'
import AddUser from './SignUp'

const mapDispatchToProps = (dispatch) => ({
  addUser: (newUser) => dispatch(postUser(newUser))
})

export default connect(null, mapDispatchToProps)(AddUser)
