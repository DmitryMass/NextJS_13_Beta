import Link from 'next/link';
import React, { FC } from 'react';
import { Todo } from '../../types';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map(({ id }) => (
        <p key={id}>
          <Link href={`/todos/${id}`}>Todo: {id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
