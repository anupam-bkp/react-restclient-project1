import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component{

    state = {
        username: '',
        password: ''
    }

    tryToLogin = () => {

        axios.get(`http://45.79.127.19:8080/user/${this.state.username}`)
        .then(response => {
            console.log(response)
            console.log(response.data);
            console.log(response.data._links);
            // console.log(response.data._links.Users1.href);
            // console.log(response.data._links.Users2.href);

            const links = response.data._links;

            for(const key in links){
                console.log(key); 

                const value = links[key];
                // console.log(value);
                    
                for(const key1 in value){
                    console.log(key1 + ' : ' + value[key1]);
                }
            }

        });

    }

    tryToLogin_old = () => {

        axios.get(`http://localhost:8080/users/auth/
                    ${this.state.username}/${this.state.password}`)
        .then(response => {
            console.log(response.data);
        });
    }

    render(){

        return(

            <div className="LoginForm">
            
            <h1>Welcome to Login Form</h1>

            <hr/>

            <form>
                <label>Username: </label>
                <input type="text" 
                    onChange={(event) => this.setState({username: event.target.value})} />
                
                <label>Password:</label> 
                <input type="Password"
                    onChange={(event) => this.setState({password: event.target.value})} />

                <button type="button" onClick={this.tryToLogin}>Login</button>
            </form>

        </div>

        );
    }

}

export default LoginForm;