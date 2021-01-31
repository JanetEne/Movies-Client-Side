import { connect } from 'react-redux'
import { loginAUser } from '../../store/auth/actions'
import LoginUser from './Signin'


const mapDispatchToProps = (dispatch) => ({
  loginUser: (user, history) => dispatch(loginAUser(user, history))
})

export default connect(null, mapDispatchToProps)(LoginUser)