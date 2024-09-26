import React from 'react';
import { CustomButton } from '@components/index';
import styles from './styles.module.css';

interface Props {
  title: string;
  buttonContent: string;
  onClickButton: () => void;
}

const Head: React.FC<Props> = ({ title, onClickButton, buttonContent }) => {
  return (
    <div className={styles.head}>
      <h1>{title}</h1>
      <CustomButton onClick={onClickButton}>{buttonContent}</CustomButton>
    </div>
  );
};

export default Head;
