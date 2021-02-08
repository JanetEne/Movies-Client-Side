import { connect } from 'react-redux'
import { loginAUser } from '../../store/auth/actions'
import LoginUser from './Signin'
import { getIsAuth } from '../../store/auth/selectors'

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user, history) => dispatch(loginAUser(user, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser)