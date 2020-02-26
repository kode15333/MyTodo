import React, { Component } from "react";
import {Link} from "react-router-dom";
class Top extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props
  }
    handleLogout = () => {
      this.props.onLogout()
    };
    render() {
        return (
            <div>
               <header className="container mb-4">
                  <nav className="navbar navbar-expand-md navbar-dark bg-dark container">
                    <Link to="/">
                    <img className="" src="https://www.hohyeonmoon.com/static/2208acea4d740eb4e10862904a845cda/1e9e2/react-js-github-pages-deploy.png" alt="" width="50" height="50"/>
                    </Link>
                    <div className="collapse navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/posts">TODOLIST</Link>
                        </li>
                        <li className="nav-item ">
                          <Link className="nav-link" to="/posts/write">WRITE</Link>
                        </li>
                        {this.props.loginState ? 
                        <li className="nav-item ">
                          <Link className="nav-link" to="/login" onClick={this.handleLogout}>LOGOUT</Link>
                        </li>
                        : <><li className="nav-item ">
                        <Link className="nav-link" to="/login">LOGIN</Link>
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link" to="/join">JOIN</Link>
                      </li>
                      </>}
                      </ul>
                    </div>
                  </nav>
                </header>
            </div>
        );
    }
}

export default Top;
