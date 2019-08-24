import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ( loginFormData, login, updateLoginForm) => {
    const handleInputChange = event => {
        const { name, value } = event.target 
        const updatedFormInfo = { 
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    
    return (
        <form onSubmit={undefined}>
            <input value={loginFormData.email} name="email" type="text" onChange={handleInputChange} />
            <input value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
            <input type="submit"  value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.login
    }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)