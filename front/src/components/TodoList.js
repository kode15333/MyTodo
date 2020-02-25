import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
                <div className="container mt-1">
                  <h3 className=" text-xl font-weight-bold mb-5">TODO LIST</h3>
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