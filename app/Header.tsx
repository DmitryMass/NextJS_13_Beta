import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>Home</Link>
      <Link href={'/todos'}>Todos</Link>
      <Link href={'/search'}>Search</Link>
    </header>
  );
};

export default Header;
