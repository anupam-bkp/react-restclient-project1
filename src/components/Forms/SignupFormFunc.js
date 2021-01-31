import React from 'react';
import { useState } from 'react-dom';

import './SignUpForm.css';


const [username, setUsername] = useState('username');
const [password, setPassword] = useState('password');
const [email, setEmail] = useState('email');

// function signup(){
//     console.log('SignUP button Pressed');
// }

function startSignupProcess(){
    console.log('Starting Signup Process');
}

const signupform1 = () => {

    return(
        <div className="SignUpForm">
            <h1>Welcome to SignUp Form</h1>
            <hr/>

            <form>
                <label>Username:</label>
                <input type="text" value = {username} onChange={ (event) => setUsername(event.target.value)}/><br/>
                
                <label>Password:</label>
                <input type="text" value = {password} onChange={ (event) => setPassword(event.target.value)}/><br/>
                
                <label>Email   :</label>
                <input type="text" value = {email} onChange={ (event) => setEmail(event.target.value)}/> <br/>
                
                <button onClick={startSignupProcess}>SignUp</button>
            </form>

        </div>
    );

}

export default signupform1;


