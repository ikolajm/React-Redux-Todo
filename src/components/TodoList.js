import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos && todos.length > 0
        ? todos.map((todo, index) => {
            return <Todo key={todo.id} todo={todo} />;
          })
        : "No todos left!"}
    </ul>
  )
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
