import React, { Component } from 'react';

class CreateTodo extends Component {
    state = {
      title: "",
      content: "",
      done: "S"
    }
    componentDidMount() {
      if(!this.props.loginState){
        window.alert('로그인 부탁드립니다')
        this.props.history.push('/login')
      }
    }
    

    handleChange = e => {
      const { value, name } = e.target;
      this.setState({
          [name]: value
      });
    };

    handleClick = e => {
      this.setState({
        done : e.target.value
      })
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.history.push('/posts')
      this.props.onCreate(this.state)
    }

    render() {
      const {title, content} = this.state;
        return (
            <div className="container w-25 mt-5">
            <h1 className="h3 mb-3 font-weight-normal">글작성</h1>
            <form className="form-signin text-left" onSubmit={this.handleSubmit}>
            <label className="font-weight-bold ml-1">TITLE</label>
            <input type="text" name="title" value={title}className="form-control mb-3" onChange={this.handleChange} required={true}/>
            <label className="font-weight-bold ml-1">CONTENT</label>
            <textarea type="text" name="content" value={content} className="form-control mb-3 h-100" onChange={this.handleChange} required={true}/>
            <div onClick={this.handleClick} className="d-flexd-flex mb-3 text-center">
              <button type="button" value="S"className="btn btn-outline-secondary mr-1 alert">TODO</button>
              <button type="button" value="I" className="btn btn-outline-secondary mr-1 alert">DOING</button>
              <button type="button" value="D"className="btn btn-outline-secondary alert">DONE</button>
            </div>
            <div  className="d-flexd-flex mb-3 text-center">
             <button className="btn btn-outline-success btn-lg" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        );
    }
}

export default CreateTodo;