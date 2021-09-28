import React from 'react'
import GoogleButton from 'react-google-button'

function LoginForm() {
    return (
        <div className="container">
            <form>
                <div className="ceyaLogo">
                    
                </div>
                <div className="form-inner">
                    <div className="btnGoogle">
                        <GoogleButton>

                        </GoogleButton>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <input id="btnLogin" type="submit" value="LOG IN"/>
                </div>
                <p id="signin">Don't have an account? Sign Up </p>
            </form>
        </div>
    )   
}

export default LoginForm
