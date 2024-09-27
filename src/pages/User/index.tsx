import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm/index';
import { useToast } from '@hooks/useToast';
import { Head, Box } from '@components/index';
import { createUser, fetchUserById, updateUser } from '@services/userService';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';
import { UserType } from 'types/userType';

const User: React.FC = () => {
  const navigate = useNavigate();
  const { showToast, Toast } = useToast();
  const { id } = useParams<{ id: string }>();

  const { data: userData, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id as string),
    enabled: !!id,
  });

  const createMutation = useMutation<UserType, Error, UserType>({
    mutationFn: createUser,
    onSuccess: () => {
      showToast('Usuário criado com sucesso!', 'success');
      navigate('/');
    },
    onError: () => {
      showToast('Erro ao criar o usuário. Tente novamente.', 'error');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: UserType) => updateUser(data, id as string),
    onSuccess: () => {
      showToast('Usuário atualizado com sucesso!', 'success');
      navigate('/');
    },
    onError: () => {
      showToast('Erro ao atualizar o usuário. Tente novamente.', 'error');
    },
  });

  const handleFormSubmit = async (data: UserType) => {
    if (id) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  };

  return (
    <Box>
      <Head
        buttonContent={'Voltar para Lista'}
        title={id ? 'Editar Usuário' : 'Cadastro de Usuário'}
        onClickButton={() => navigate('/')}
      />

      {isLoading ? (
        <Skeleton />
      ) : (
        <UserForm
          onSubmit={handleFormSubmit}
          defaultValues={userData}
          isEdit={!!id}
        />
      )}
      <Toast />
    </Box>
  );
};

export default User;
