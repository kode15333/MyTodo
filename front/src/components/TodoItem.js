import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className="col-md-4"> 
            <div className="card mb-4 box-shadow">
            <div className="card-header">타이틀</div>
              <div className="card-body">
              <p className="card-text">콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다>콘텐츠입니다></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group ml-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">수정</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">완료</button>
                </div>
                <small className="text-muted mr-3">작성날짜</small>
              </div>
              </div>
            </div>
        </div>
        );
    }
}

export default TodoItem;