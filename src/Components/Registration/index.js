import React from 'react';

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }

    validate = (e) => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.register}>
                    <div>Registration Form</div>
                    <div>
                        <lable>Username</lable>
                        <input name="username" type="text" min={5} max={10} required></input>
                    </div>
                    <div>
                        <lable>Email-id</lable>
                        <input type="email" min={5} max={10} required></input>
                    </div>
                    <div>
                        <lable>Password</lable>
                        <input type="password" min={5} max={10} required></input>
                    </div>
                    <div>
                        <button> Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;