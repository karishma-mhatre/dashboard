import React from 'react';
import './registration.scss';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameError: "",
            passwordError: "",
            isRegistering: false,
            registrationError: ""
        }
    }

    validateUserName = (userName) => {
        if(userName.length < 5 || userName.length > 10) {
            this.setState({userNameError: "Username should contain at least 5 and at most 10 characters"})
            return false;
        }

        return true;
    }

    validatePaswword = (password) => {
        if(!password.match(/[a-z]+/)){
            this.setState({passwordError: "Password should contain at lease one lowercase character"})
            return false;
        }
        
        if(!password.match(/[A-Z]+/)) {
            this.setState({passwordError: "Password should contain at lease one uppercase character"})
            return false;
        }
        
        if(!password.match(/\d{3,}/)) {
            this.setState({passwordError: "Password should contain at lease 3 digits"})
            return false;
        }
        
        if(!password.match(/[!@#\$%\^\&*\)\(+=._-]{2,}/)) {
            this.setState({passwordError: "Password should contain at lease 2 special characters"})
            return false;
        }

        return true;
    }

    matchPattern  = (string, regex) => {
        return string.match(regex)
    }

    register = (e) => {
        e.preventDefault();
        let userName = e.target.username.value,
            password = e.target.password.value,
            email = e.target.email.value
        let data = Object.assign({},
            {
                email,
                username: userName,
                password
            })
        if(this.validateUserName(userName) && this.validatePaswword(password)) {
            this.setState({isRegistering: true})
            fetch("http://35.154.106.116:5000/register", {
                method: "POST",
                body: JSON.stringify(data)
            }).then((response) => {
                this.setState({isRegistering: true})
                if(response) {
                    this.props.register();
                }
            }).catch((error) => {
                this.setState({registrationError: "Couldnt register. Please try again later."});
            })
        }
    }

    render() {
        return (
            <div className="login">
                <div className="login-title">Registration Form</div>
                <div className="login-form">
                <form onSubmit={(e) => {this.register(e)}}>
                    <div className="input-container">
                        <label className="input-label">Username</label>
                        <input className="input" name="username" type="text" required></input>
                    </div>
                    <div className="input-container">
                        <label className="input-label">Email-id</label>
                        <input className="input" name="email" type="email" required></input>
                    </div>
                    <div className="input-container">
                        <label className="input-label">Password</label>
                        <input className="input" name="password" type="password" required></input>
                    </div>
                    <div className="btn-container">
                        <button className="btn" type="submit"> Register</button>
                    </div>
                </form>
                </div>
                <div className="errors">
                    {
                        this.state.userNameError &&
                        <div className="error-message">{this.state.userNameError}</div>
                    }
                    {
                        this.state.passwordError &&
                        <div className="error-message">{this.state.passwordError}</div>
                    }
                    {
                        this.state.registrationError &&
                        <div className="error-message">{this.state.registrationError}</div>
                    }
                </div>
            </div>
        )
    }
}

export default Registration;