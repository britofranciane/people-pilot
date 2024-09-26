import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

const Box: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Box;
