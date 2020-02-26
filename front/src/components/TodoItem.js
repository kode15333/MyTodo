import React, { Component } from 'react';
import { FaListUl, FaPlay, FaCheck  } from 'react-icons/fa';


class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo !== this.props.todo
}

  handleUpdate = () => {
    this.props.history.push(`/posts/${this.props.postid}`)
  }
  handleDelete = () => {
    this.props.onRemove(this.props.postid);
  }
  handleDone = ()=> {
    const post = this.props.todo;
    post.done = 'D';
    this.props.onUpdate(post)
  }
  render() {
      const {todo} = this.props;
      let todostatus = '';
      if(todo.done === 'S'){
        todostatus = <FaListUl size="1.5em"/>
      }else if(todo.done === 'I'){
        todostatus = <FaPlay size="1.5em"/>
      }else{
        todostatus = <FaCheck size="1.5em"/>
      }
        return (
            <div className="col-md-4"> 
            <div className="card mb-4 box-shadow">
            <div className="card-header">{todo.title}</div>
              <div className="card-body">
              <p className="card-text">{todo.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group ml-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleUpdate}>수정</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleDone} >완료</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleDelete}>삭제</button>
                </div>
                <span className="text-muted mr-3">{todostatus}</span>
              </div>
              </div>
            </div>
        </div>
        );
    }
}

export default TodoItem;