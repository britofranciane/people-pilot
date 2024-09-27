import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import styles from './styles.module.css';

interface Props extends ButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const CustomButton: React.FC<Props> = ({
  children,
  onClick,
  color = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <Button
      variant={'contained'}
      onClick={onClick}
      color={color}
      size={size}
      className={styles.customButton}
      {...props}
    >
      <span className={styles.text}>{children}</span>
    </Button>
  );
};

export default CustomButton;
