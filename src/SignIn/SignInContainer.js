import { connect } from 'react-redux'
import { loginAUser } from '../store/auth/actions'
import LoginUser from './Signin'


const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginAUser(user))
})

export default connect(null, mapDispatchToProps)(LoginUser)