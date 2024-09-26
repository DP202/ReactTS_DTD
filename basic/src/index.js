import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Welcome from './component & props/Welcome'
import Clock from './component & props/Clock'
import CustomInput from './component & props/CustomInput'
import Layout from './component & props/Layout'
import BareButton from './event/BareButton'
import LoginControl from './event/LoginControl'
import Form from './form/Form'
import UnControlledConponent from './form/UnControlledConponent'

import Inheritance from './CompositionInheritance/Inheritance'
import Composition from './CompositionInheritance/Composition'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Welcome name='Dong Pham' /> */}
    {/* <Clock /> */}
    {/* <Layout>
      <h1>Hello</h1>
      <CustomInput type="password" value="100" autoFocus onChange={() => {}} />
    </Layout> */}
    {/* 
    <BareButton /> */}
    {/* <LoginControl isLoggedIn={false} /> */}
    {/* Form */}
    {/* <Form /> */}
    {/* <UnControlledConponent /> */}

    {/* <Inheritance /> */}

    <Composition />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
