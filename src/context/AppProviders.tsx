import { ToastProvider } from './ToastContext';
import { UserProvider } from './UserContext';

interface Props {
  children: React.ReactElement;
}

const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <UserProvider>
      <ToastProvider>{children}</ToastProvider>
    </UserProvider>
  );
};

export default AppProviders;
