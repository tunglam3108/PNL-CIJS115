import React from 'react'
import "./styles.css";

const TodoList = (props) => {
  console.log(props);
  return (
    <div className="box">
      <div className="Title">
        <div className="left">
          <div>{props.head}</div>
          <div>{props.task}</div>
        </div>
        {/* <div className="right">
          <p>Star</p>
          <p>...</p>
        </div> */}
      </div>
      <div className="Card">
        <div>{props.title}</div>
        <div className="card-do">{props.do}</div>
        <div className="card-name">{props.name}</div>
        <div className="time">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}

export default TodoList;