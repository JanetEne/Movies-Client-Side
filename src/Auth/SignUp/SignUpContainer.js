import { connect } from 'react-redux'
import { signUp } from '../../store/auth/actions'
import AddUser from './SignUp'

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUser, history) => dispatch(signUp(newUser, history))
})

export default connect(null, mapDispatchToProps)(AddUser)
