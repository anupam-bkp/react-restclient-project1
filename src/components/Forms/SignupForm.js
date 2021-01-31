import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component{

    state = {
        username: 'username',
        password: 'password',
        email: 'email'
    }

    startSignupProcess = () => {

        console.log(`

            SignUp Process Starts:

            Username: ${this.state.username}
            Password: ${this.state.password}
            Email: ${this.state.email}
        `)        

        const data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }

        // axios.post('https://ng-complete-guide-21722.firebaseio.com/users.json', data)

        axios.post('http://45.79.127.19:8080/users', data)
            .then(response => {
                console.log(response);
            }); 
    }

    render(){
        return(
            
            <div className="SignUpForm">

                <h1>Welcome to SignUp Form</h1>
                <hr/>

                <form>
                    <label>Username:</label>
                    <input type="text" value = {this.state.username} 
                        onChange={ (event) => this.setState({username: event.target.value})}/><br/>
                    
                    <label>Password:</label>
                    <input type="text" value = {this.state.password} 
                        onChange={ (event) => this.setState({password: event.target.value})}/><br/>
                    
                    <label>Email   :</label>
                    <input type="text" value = {this.state.email} 
                        onChange={ (event) => this.setState({email: event.target.value})}/> <br/>
                    
                    <button type="button" onClick={this.startSignupProcess}>SignUp</button>
                </form>

            </div>
        );
    };

}

export default SignupForm;