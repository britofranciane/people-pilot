import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './validationSchema';
import { CustomButton } from '@components/index';
import { TextField } from '@mui/material';
import styles from './styles.module.css';
import { UserType } from 'types/userType';

type UserFormInputs = z.infer<typeof validationSchema>;

interface FormField {
  name: keyof UserFormInputs;
  label: string;
}

interface Props {
  onSubmit: (data: UserFormInputs | UserType) => void;
  defaultValues?: UserFormInputs;
  isEdit?: boolean;
}

const UserForm: React.FC<Props> = ({
  onSubmit,
  defaultValues,
  isEdit = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormInputs>({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const dataForm: FormField[] = [
    { name: 'name', label: 'Nome' },
    { name: 'cpf', label: 'CPF' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Telefone' },
    { name: 'address', label: 'Endereço' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {dataForm.map(({ name, label }) => (
        <TextField
          {...register(name)}
          key={name}
          placeholder={label}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      ))}
      <CustomButton type="submit" size="large" className={styles.customButton}>
        {isEdit ? 'Atualizar' : 'Salvar'}
      </CustomButton>
    </form>
  );
};

export default UserForm;
