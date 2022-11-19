import React, { FC } from 'react';
import { Todo } from '../../../types';
import { notFound } from 'next/navigation';

import styles from '../../../styles/todo.module.scss';

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  //fetch option (cache: 'force-cache' or next: {revalidate: 60})
  const todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo: Todo = await fetchTodo(todoId);

  if (!todo.id) {
    return notFound();
  }

  return (
    <div className={styles.todo}>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>By User: {todo.userId}</p>
    </div>
  );
};

export default TodoPage;

// static page generation
// only in npm run start (prod) u see that
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();

  const trimmedTodo = todos.splice(0, 10);

  return trimmedTodo.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
