import React, { createContext, useState, useContext } from 'react';

interface ToastContextProps {
  showToast: (message: string, type: 'success' | 'error') => void;
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

interface Props {
  children: React.ReactElement;
}

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');
  const [isVisible, setIsVisible] = useState(false);

  const showToast = (msg: string, toastType: 'success' | 'error') => {
    setMessage(msg);
    setType(toastType);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider
      value={{ showToast, message, type, isVisible, hideToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }
  return context;
};
