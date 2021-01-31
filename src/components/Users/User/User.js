import React from 'react';

import './User.css';

const user = (props) => {

    return(
        <div className='User'>
            <h4>{props.username}</h4>
            <h4>{props.password}</h4>
            <h4>{props.email}</h4>
        </div>
    );

}

export default user;
