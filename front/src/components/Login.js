import React, { Component } from 'react';
import axios from "axios";

class Login extends Component {
  state = {
    userid: "",
    userpw: ""
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
        [name]: value
    });
  };
  
  handleLogin = e => {
    const { userid, userpw } = this.state;
    e.preventDefault();
    e.target.reset();
    try {      
      axios.post("/api/user/join", {
        userid: userid,
        userpw: userpw
      })
      .then(res => {
        console.log(res)
        if(res.data.loginState){
          this.props.onLogin(res.data);
          axios.get('/api/board').then(res=>{
            this.props.onListUp(res.data);
         })
          this.props.history.push('/')
        }else{
          window.alert('아이디와 비밀번호 다시한번 확인해주세요')
        }
      });
      this.setState({
        userid : '',
        userpw : ''
      })
    } catch (error) {
    }
  };

    render() {
      const {userid, userpw} = this.state;
        return (
            <div>
                <div className="container w-25 mt-5">
                  <form className="form-signin" onSubmit={this.handleLogin}>
                    <img className="mb-4 mt-4" src="/images/logo.png" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">로그인</h1>
                    <label className="sr-only">ID</label>
                    <input type="text" name="userid" className="form-control mb-1" state={userid}  onChange={this.handleChange} placeholder="ID" required={true} autoFocus={true} />
                    <label className="sr-only">Password</label>
                    <input type="password" name="userpw" className="form-control mb-3"state={userpw}  onChange={this.handleChange} placeholder="Password" required={true} />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
                  </form>
                </div>                
            </div>
        );
    }
}

export default Login;