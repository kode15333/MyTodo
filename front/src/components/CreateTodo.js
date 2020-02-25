import React, { Component } from 'react';

class CreateTodo extends Component {
    render() {
        return (
            <div className="container w-25">
            <h1 className="h3 mb-3 font-weight-normal">글작성</h1>
            <form className="form-signin text-left">
            <label htmlFor="inputTitle" className="font-weight-bold ml-1 ">글 내용</label>
            <input type="text" id="inputTitle" className="form-control mb-3" placeholder="글제목" required={true}/>
            <label htmlFor="inputContent" className="font-weight-bold ml-1">글내용</label>
            <textarea type="text" id="inputContent" className="form-control mb-3 h-100" placeholder="글내용" required={true}/>
            <div className="d-flexd-flex mb-3 text-center">
              <button type="button" className="btn btn-outline-secondary mr-1 alert active">TODO</button>
              <button type="button" className="btn btn-outline-secondary mr-1 alert">DOING</button>
              <button type="button" className="btn btn-outline-secondary alert">DONE</button>
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