import { connect } from 'react-redux'
import { signUp } from '../../Store/auth/actions'
import AddUser from './SignUp'
import { getIsAuth } from '../../Store/auth/selectors'

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUser, history) => dispatch(signUp(newUser, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
