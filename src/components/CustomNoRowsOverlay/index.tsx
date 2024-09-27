import React from 'react';
import styles from './styles.module.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CustomNoRowsOverlay: React.FC = () => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.iconContainer}>
        <PersonAddIcon className={styles.pulsatingIcon} />
      </div>
      <div className={styles.message}>
        <h2>Nenhum usuário encontrado!</h2>
        <p>
          Parece que ainda não há usuários cadastrados. Clique no botão
          "Cadastrar Usuário" para adicionar novos usuários e começar!
        </p>
      </div>
    </div>
  );
};

export default CustomNoRowsOverlay;
