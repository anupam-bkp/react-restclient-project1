import React from 'react';

import './LoginForm.css';

function login(){
    console.log('Login Pressed');
}

const loginForm = () => {

    return(
        <div className="LoginForm">
            
            <h1>Welcome to Login Form</h1>

            <hr/>

            <form>
                Username: 
                <input type="text" />
                Password:
                <input type="Password" />

                <button onClick={login}>Login</button>
            </form>

        </div>
    );
}


export default loginForm;
