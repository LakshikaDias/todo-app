import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  //   console.log(todos, "hiii");

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <RiCloseCircleFill onClick={() => removeTodo(todo.id)} />
        <RiEdit2Fill
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
};

export default Todo;
