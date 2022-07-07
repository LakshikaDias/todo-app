import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  //   console.log(todos, "hiii");

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //   const printList = todos.map((todo, index) => {
  //     // console.log(todo, "oooo");
  //     // console.log(index, "pppp");
  //     console.log(todo.text, "heloooo");

  //     return index, todo.text;
  //   });

  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <RiCloseCircleFill onClick={() => removeTodo(todo.id)} />
        <RiEdit2Fill
          onClick={() => editTodo({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
};

export default Todo;
