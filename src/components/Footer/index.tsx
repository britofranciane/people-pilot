import styles from './styles.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Politica de Privacidade</button>
          <button className={styles.button}>Termos de Serviço</button>
        </div>
        <div className={styles.copyContainer}>
          <span>© 2024 People Pilot</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
