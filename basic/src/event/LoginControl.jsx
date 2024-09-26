import React from 'react'

class LoginButton extends React.Component {
  handleLogin() {
    console.log('Login')
  }
  render() {
    return <button onClick={this.handleLogin}>Login</button>
  }
}

class LogoutButton extends React.Component {
  handleLogOut() {
    console.log('Logout')
  }
  render() {
    return <button onClick={this.handleLogOut}>Logout</button>
  }
}
// Cách 1 :
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const { isLoggedIn } = this.props
//     if (isLoggedIn) {
//       return (
//         <div className='login-control'>
//           <LogoutButton />
//         </div>
//       )
//     } else {
//       return (
//         <div className='login-control'>
//           <LoginButton />
//         </div>
//       )
//     }
//   }
// }

// Cách 2 : gọn hơn
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const { isLoggedIn } = this.props
//     let button
//     if (isLoggedIn) {
//       button = <LogoutButton />
//     } else {
//       button = <LoginButton />
//     }
//     return <div className='login-control'>{button}</div>
//   }
// }

// cách 3 :
class LoginControl extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { isLoggedIn } = this.props

    return (
      <div className='login-control'>
        {isLoggedIn && <LogoutButton />}
        {/* && là nếu tồn tại login  */}
        {!isLoggedIn && <LoginButton />}
      </div>
    )
  }
}

export default LoginControl
