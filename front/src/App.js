import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Login from "./components/Login";
import Join from "./components/Join";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import Bottom from "./components/Bottom";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import UpdateTodo from "./components/UpdateTodo";
import Home from "./components/Home";
class App extends Component {
    state = {
        nickname: "",
        todos:[],
        loginState: false,
    };


    handleLogin = data => {
        const {loginState, nickname} = data;
        if(loginState){
            this.setState({
                loginState : !this.state.loginState,
                nickname : nickname
            })
        }
    };

    handlePostListUP = data => {
        this.setState({
            todos : [...data]
        })
    }

    handleLogout = () => {
        try {            
            axios.get("/api/user").then(res =>{
                console.log(res)
                if(res.data.logoutState){
                    this.setState({
                        loginState: !this.state.loginState
                    });
                }else{
                    window.alert('로그아웃 할 수 없습니다.')
                }
            });
        } catch (error) {
        }
    };

    handleCreate = post => {
        const { postid, title, content, done } = post;
        if (typeof postid === 'undefined') {
            try {                
                axios.post("/api/board", {
                        title: title,
                        content: content,
                        done: done
                    })
                    .then(res => {
                        this.setState({
                            todos : this.state.todos.concat({
                                postid : res.data.postid,
                                title,
                                content,
                                done
                            })
                        })
                    });
            } catch (error) {
                console.log(error)
            }
        }
    };


    handleupdatePost = (post) => {
        const {postid, title, content, done} = post;
        this.setState({
            todos : this.state.todos.map(todo => {
                if(String(todo.postid) === String(postid)){
                    return {...post}
                }else{
                    return todo
                }
            })
        })
        try {            
            axios.patch(`/api/board/${postid}`, {
                            title: title,
                            content: content,
                            done: done
                        }).then(res=>{
                            console.log(res.data, '업데이트 완료')
            })
        } catch (error) {
            console.log(error)
        }
    };

    handledeletePost = (postid) => {
        this.setState({
            todos : this.state.todos.filter(todo => todo.postid !== postid)
        })
        try {
            axios.delete(`/api/board/${postid}`).then(res => console.log(res.data, '삭제 완료'));
        } catch (error) {
            console.log(error)
        }
    };

    render() {
        return (
            <div className="App">
              <Router>
              <Top loginState={this.state.loginState} onLogout={this.handleLogout}/>
                <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/posts"
                     component={(props)=> 
                     <TodoList {...props}
                       nickname={this.state.nickname}
                       todos={this.state.todos}
                       onUpdate={this.handleupdatePost}
                       onRemove={this.handledeletePost}/>}/>
                    <Route path="/posts/write"
                     component={(props)=>
                     <CreateTodo {...props}
                       loginState={this.state.loginState}
                       onCreate={this.handleCreate} />}/>
                    <Route path="/posts/:postid"
                     component={(props)=>
                     <UpdateTodo {...props}
                      onUpdate={this.handleupdatePost}/>}/>         
                    <Route path="/login"
                     component={(props)=>
                     <Login {...props}
                      todos={this.state.todos}
                      onLogin={this.handleLogin}
                      onListUp={this.handlePostListUP}/>}/>                   
                    <Route path="/join"
                     component={Join}/>
                </Switch>
                </div>
              </Router>
              <hr/>
              <Bottom/>
            </div>
        );
    }
}
export default App;
