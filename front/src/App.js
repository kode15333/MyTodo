import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Login from "./components/Login";
import Join from "./components/Join";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import Bottom from "./components/Bottom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
    state = {
        userid: "",
        userpw: "",
        nickname: "",
        status: false,
        postid: "",
        title: "",
        content: "",
        done: "N"
    };
 
    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleSignUp = e => {
        const { userid, userpw, nickname } = this.state;
        e.preventDefault();
        axios
            .post("api/user", {
                userid: userid,
                userpw: userpw,
                nickname: nickname
            })
            .then(res => console.log(res));
        this.setState({
            userid: "",
            userpw: "",
            nickname: ""
        });
    };
    handleLogin = e => {
        const { userid, userpw } = this.state;
        e.preventDefault();
        axios
            .post("api/user/join", {
                userid: userid,
                userpw: userpw
            })
            .then(res => console.log(res));
        this.setState({
            userid: "",
            userpw: "",
            status: !this.state.status
        });
    };
    handleLogout = e => {
        axios.get("api/user").then(res => console.log(res));
        this.setState({
            status: !this.state.status
        });
    };
    writePost = e => {
        const { postid, title, content, done } = this.state;
        e.preventDefault();
        if (postid === "") {
            axios
                .post("api/board", {
                    title: title,
                    content: content,
                    done: done
                })
                .then(res => console.log(res));
        } else {
            axios
                .patch(`api/board/${postid}`, {
                    title: title,
                    content: content,
                    done: done
                })
                .then(res => {
                    console.log(res);
                    this.setState({
                        postid: "",
                        title: "",
                        content: ""
                    });
                });
        }
    };

    handleupdatePost = () => {
        // postid를 받아오자!!! 라우터 주소줄에서
        // const {title, content, done} = this.state;
        axios.get("api/board/11").then(res => {
            const { postid, title, content } = res.data;
            this.setState({
                postid: postid,
                title: title,
                content: content
            });
        });
    };
    handledeletePost = () => {
        axios.delete("api/board/11").then(res => console.log(res));
    };

    render() {
        return (
            <div className="App">
              <Router>
              <Top/>
              <Switch>
                <Route exact path="/">
                  <TodoList/>
                </Route>
                <Route path="/wr">
                  <CreateTodo/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/join">
                  <Join/>
                </Route>
              </Switch>
              </Router>
              {/* <UpdateTodo/> */}
              <hr/>
              <Bottom/>


                {/* {this.state.status ? "로그인" : "로그아웃"}
                <h1>회원가입</h1>
                <form onSubmit={this.handleSignUp}>
                    <input name="userid" value={this.state.userid} onChange={this.handleChange} />
                    <input name="userpw" value={this.state.userpw} onChange={this.handleChange} />
                    <input
                        name="nickname"
                        value={this.state.nickname}
                        onChange={this.handleChange}
                    />
                    <button type="submit">추가</button>
                </form>
                <h1>로그인</h1>
                <form onSubmit={this.handleLogin}>
                    <input name="userid" value={this.state.userid} onChange={this.handleChange} />
                    <input name="userpw" value={this.state.userpw} onChange={this.handleChange} />
                    <button type="submit">추가</button>
                </form>
                <button onClick={this.handleLogout}>로그아웃</button>
                <h1>글쓰기</h1>
                <form onSubmit={this.writePost}>
                    <input
                        style={{ display: "none" }}
                        name="postid"
                        value={this.state.postid}
                        onChange={this.handleChange}
                    />
                    <input name="title" value={this.state.title} onChange={this.handleChange} />
                    <input name="content" value={this.state.content} onChange={this.handleChange} />
                    <button type="submit">추가</button>
                </form>
                <button onClick={this.handleupdatePost}>수정</button>
                <hr />
                <button onClick={this.handledeletePost}>삭제</button> */}
            </div>
        );
    }
}
export default App;
