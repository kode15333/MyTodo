import React, { Component } from 'react';
import axios from "axios";

class Join extends Component {
    state = {
        userid: "",
        userpw: "",
        pwCheck:'',
        nickname: "",
        verify : ''
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUp = e => {
        e.preventDefault();
        e.target.reset()
        const {userid, userpw, nickname, pwCheck} = this.state
        if(userpw === pwCheck){
            this.setState({
                verify : ''
            })
            axios.post("/api/user", {
                userid: userid,
                userpw: userpw,
                nickname: nickname
            })
            .then(res => {
                console.log(res)
                if(res.data.singUpState){
                    this.props.history.push('/login')
                }else{
                    window.alert('아이디기 중복');
                }
            });
        }else{
            this.setState({
                pwCheck : '',
                verify : '비밀번호를 다시한번 확인해주세요'
            })
            return false
        }
    };
    
    render() {
        return (
            <div>
                <div className="container w-25">
                    <img className="mb-4 mt-4" src="/images/logo.png" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">회원가입</h1>
                    <form className="form-signin text-left" onSubmit={this.handleSignUp}>
                    <label className="font-weight-bold ml-1">I  D</label>
                    <input type="text" name="userid" value={this.state.userid} className="form-control mb-3" placeholder="ID를 입력하세요" required={true} autoFocus={true} onChange={this.handleChange}/>
                    <label className="font-weight-bold ml-1">Password</label>
                    <input type="password" name="userpw" value={this.state.userpw} className="form-control  mb-3" placeholder="Password" required={true} onChange={this.handleChange}/>
                    <label className="font-weight-bold ml-1">Password Check</label>
                    <input type="password"
                     name="pwCheck" value={this.state.pwCheck}
                     className="form-control mb-1"
                     placeholder="Password Check" 
                     required={true} 
                     onChange={this.handleChange}/><span className="ml-2 text-danger">{this.state.verify}</span><br/>
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