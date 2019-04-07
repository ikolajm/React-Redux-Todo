import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <li style={ todo.completed ? {textDecoration: "line-through"} : {} } onClick={() => toggleTodo(todo.id)}>
    <span style={{cursor: "pointer"}}>
      {todo.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
