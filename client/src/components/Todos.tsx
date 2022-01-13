import React from "react";

interface Props {
  todos: any;
}

const Todos = (props: Props) => {
  const { loading, error, data } = props.todos;

  const todos = data.todos;

  const todoList = todos.map((todo: any, index: number) => (
    <div key={index}>
      <span>title</span>
      <h1>{todo.title}</h1>

      <span>message</span>
      <p>{todo.message}</p>
    </div>
  ));

  return (
    <div>
      <h1 className="font-bold text-4xl mb-12">your todo list, user.</h1>
      {data && todoList}
    </div>
  );
};

export default Todos;
