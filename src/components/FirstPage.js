import React from 'react';

import history from '../history';

const firstPage = () => {

    return(

    <div>
        <h1>This is My First App.</h1>
        <hr/>
        <button onClick={() => history.push('/loginForm')}>Login</button>
        <span>    </span>
        <button onClick={() => history.push('/signupForm')}>SignUp</button>
        <span>    </span>
        <button onClick={() => history.push('/displayUsers')}>DisplayUsers</button>
    </div>

    );

}

export default firstPage;