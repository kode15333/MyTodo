import React, { Component } from 'react';
import axios from "axios";

class UpdateTodo extends Component {
  state = {
    postid: '',
    title: '',
    content: '',
    done:''
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

  componentDidMount() {
    const {postid} = this.props.match.params;
    try {
      axios.get(`/api/board/${postid}`).then(res => {
          const {title, content, done } = res.data;
          this.setState({
              postid: postid,
              title: title,
              content: content,
              done : done
          });
      });
      document.querySelector('#S').className += ' disabled'   
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/posts')
    this.props.onUpdate(this.state);
  }
  
    render() {
      const {title, content} = this.state;
        return (
            <div className="container w-25">
                    <h1 className="h3 mb-3 font-weight-normal">글 수정</h1>
                    <form className="form-signin text-left" onSubmit={this.handleSubmit}>
                      <label className="font-weight-bold ml-1">TITLE</label>
                      <input type="text" name="title" value={title}className="form-control mb-3" onChange={this.handleChange} required={true}/>
                      <label className="font-weight-bold ml-1">CONTENT</label>
                      <textarea type="text" name="content" value={content} className="form-control mb-3 h-100" onChange={this.handleChange} required={true}/>
                      <div onClick={this.handleClick} className="d-flexd-flex mb-3 text-center">
                        <button type="button" id="S" value="S"className="btn btn-outline-secondary mr-1 alert">TODO</button>
                        <button type="button" id="I" value="I" className="btn btn-outline-secondary mr-1 alert">DOING</button>
                        <button type="button" id="D" value="D"className="btn btn-outline-secondary alert">DONE</button>
                      </div>
                      <div  className="d-flexd-flex mb-3 text-center">
                      <button className="btn btn-outline-success btn-lg" type="submit">Sign in</button>
                      </div>
                    </form>
                </div>
        );
    }
}

export default UpdateTodo;