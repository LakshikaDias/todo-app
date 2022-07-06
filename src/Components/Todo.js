import React from "react";

const Todo = ({ todos, completeTodo }) => {
  //   console.log(todos, "hiii");
  return todos.map((todo, index) => {
    // console.log(todo, "ooo");
    <div key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
        {/* {console.log(todo, "hiii")} */}
      </div>
    </div>;
  });
};

export default Todo;
