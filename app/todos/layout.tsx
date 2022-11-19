import TodoList from './TodoList';
// в этом подходе будет рендерится только часть с Чилдреном (та страница которую выберем Туду 1 туду2 ...)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.todos}>
      <div>
        {/* @ts-ignore*/}
        <TodoList />
      </div>
      <div>{children}</div>
    </main>
  );
}

import styles from '../../styles/todos.module.scss';
