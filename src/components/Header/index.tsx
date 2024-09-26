import * as React from 'react';
import styles from './styles.module.css';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';

const Header: React.FC = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <HourglassFullIcon />
          People Pilot
        </div>
        {/* <nav className={styles.menu}>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Groups</li>
            <li>Settings</li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
};

export default Header;
