import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
                <div className="container">
                  <div className="row">
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                  </div>    
                </div>
        );
    }
}

export default TodoList;