import React from 'react';
import {
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
} from '@mui/material';
import CustomButton from '@components/CustomButton';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const CustomDialog: React.FC<Props> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-dialog-title"
    >
      <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={onClose} variant="outlined">
          Cancelar
        </CustomButton>
        <CustomButton onClick={onConfirm} color="error">
          Confirmar
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
