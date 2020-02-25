import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container w-25 mt-5">
                  <form className="form-signin">
                    <img className="mb-4 mt-4" src="https://www.hohyeonmoon.com/static/2208acea4d740eb4e10862904a845cda/1e9e2/react-js-github-pages-deploy.png" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control mb-1" placeholder="Email address" required="" autoFocus=""/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required=""/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  </form>
                </div>                
            </div>
        );
    }
}

export default Login;