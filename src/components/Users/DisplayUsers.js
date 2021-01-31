import React, { Component } from 'react';
import axios from 'axios';

import './DisplayUsers.css'
import User from './User/User';

class DisplayUsers extends Component {

    state = {
        users: [],
        error: false
    }

    componentDidMount(){

        console.log('Component Did Mount!!!')

        // axios.get('https://ng-complete-guide-21722.firebaseio.com/users.json')

        axios.get('http://45.79.127.19:8080/users')
            
            .then(response => {
                // console.log(response);
                console.log(response.data);
                // console.log(response.data[0]);
                
                // const updatedUsers = response.data.map(user => {
                //     return user;
                // });

                this.setState({users: response.data});
            })
            
            .catch(error => {
                console.log('Some Error occurs!!');
                this.setState({error: true});
            });
    }

    render(){

        let users = <p style={{textAlign: 'center'}}>Loading....</p>;

        if(!this.state.error){
            users =  this.state.users.map(user => {
                return <User 
                    key={user.id} 
                    username={user.username}
                    password={user.password}
                    email={user.email}
                />
            });
        }else{
            users = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        }

        return(
            <section className="DisplayUsers">
                {users}
            </section>
        );
    }

}

export default DisplayUsers;
