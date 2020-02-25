import React, { Component } from 'react';

class Join extends Component {
    render() {
        return (
            <div>
                <div className="container w-25">
                    <img className="mb-4 mt-4" src="https://www.hohyeonmoon.com/static/2208acea4d740eb4e10862904a845cda/1e9e2/react-js-github-pages-deploy.png" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">회원가입</h1>
                    <form className="form-signin text-left">
                    <label htmlFor="inputEmail"className="font-weight-bold ml-1">Email address</label>
                    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required={true} autoFocus=""/>
                    <label htmlFor="inputPassword" className="font-weight-bold ml-1">Password</label>
                    <input type="password" id="inputPassword" className="form-control  mb-3" placeholder="Password" required={true}/>
                    <label htmlFor="inputPassword" className="font-weight-bold ml-1">Password Check</label>
                    <input type="password" id="inputPassword" className="form-control  mb-3" placeholder="Password Check" required={true}/>
                    <label htmlFor="inputNickName" className="font-weight-bold ml-1">NickName</label>
                    <input type="text" id="inputNickName" className="form-control mb-3" placeholder="NickName" required={true}/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  </form>
                </div>                
            </div>
        );
    }
}

export default Join;