import React, { Component } from 'react';

class Join extends Component {
    state = {
        userid: "",
        userpw: "",
        pwCheck:'',
        nickname: "",
        verify : false
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleJoin = e => {
        e.preventDefault();
        this.props.onSignUp(this.state)
    }

    


    render() {
        return (
            <div>
                <div className="container w-25">
                    <img className="mb-4 mt-4" src="https://www.hohyeonmoon.com/static/2208acea4d740eb4e10862904a845cda/1e9e2/react-js-github-pages-deploy.png" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">회원가입</h1>
                    <form className="form-signin text-left" onSubmit={this.handleJoin}>
                    <label className="font-weight-bold ml-1">I  D</label>
                    <input type="text" name="userid" value={this.state.userid} className="form-control mb-3" placeholder="ID를 입력하세요" required={true} autoFocus={true} onChange={this.handleChange}/>
                    <label className="font-weight-bold ml-1">Password</label>
                    <input type="password" name="userpw" value={this.state.userpw} className="form-control  mb-3" placeholder="Password" required={true} onChange={this.handleChange}/>
                    <label className="font-weight-bold ml-1">Password Check</label>
                    <input type="password" name="pwCheck" value={this.state.pwCheck} className="form-control" placeholder="Password Check" required={true} onChange={this.handleChange}/>{this.state.verify ? '동비밀번호를 확인해주세요' : ''}<br/>
                    <label className="font-weight-bold ml-1">NickName</label>
                    <input type="text" name="nickname" value={this.state.nickname} className="form-control mb-3" placeholder="NickName" required={true} onChange={this.handleChange}/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  </form>
                </div>                
            </div>
        );
    }
}

export default Join;