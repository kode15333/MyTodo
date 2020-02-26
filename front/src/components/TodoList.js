import React, { Component } from 'react';
import TodoItem from './TodoItem';
import shortid from'shortid';

class TodoList extends Component {
  componentDidMount() {
    if(!this.props.nickname){
      window.alert('로그인 부탁드립니다')
      this.props.history.push('/login')
    }
  }
  
    render() {
      const {todos, nickname, onRemove, onUpdate} = this.props
        return (
                <div className="container mt-1">
                  <h3 className=" text-xl font-weight-bold mb-5">{nickname === '' ? 'TODO LIST' : this.props.nickname + '의 TODO LIST' }</h3>
                  <div className="row">
                    {todos.map(todo => (
                    <TodoItem
                      {...this.props}
                     key={shortid.generate()}
                     postid={todo.postid}
                     todo={todo}
                     onUpdate={onUpdate}
                     onRemove={onRemove}
                    />
                    ))}
                  </div>    
                </div>
        );
    }
}

export default TodoList;