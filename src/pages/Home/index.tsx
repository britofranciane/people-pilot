import React from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useToast } from '@hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { Head, CustomDialog, Box } from '@components/index';
import UsersTable from './UsersTable';
import { deleteUser, fetchUsers } from '@services/userService';

const Home: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast, Toast } = useToast();

  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState<string | null>(
    null
  );

  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      showToast('Usuário deletado com sucesso!', 'success');
    },
    onError: (error: Error) => {
      console.error('Erro ao deletar o usuário:', error);
      showToast('Erro ao deletar o usuário', 'error');
    },
  });

  const handleConfirmDelete = async () => {
    if (selectedUserId) {
      await deleteMutation.mutateAsync(selectedUserId);
      setDeleteDialogOpen(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setSelectedUserId(id);
    setDeleteDialogOpen(true);
  };

  return (
    <Box>
      <Head
        buttonContent={'Cadastrar Usuário'}
        title={'Usuários Cadastrados'}
        onClickButton={() => navigate('/user/new')}
      />
      <UsersTable
        users={users}
        isLoading={isLoading}
        handleDeleteClick={handleDeleteClick}
      />
      <CustomDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title={'Confirmar Exclusão'}
        message={'Tem certeza que deseja excluir este usuário?'}
      />
      <Toast />
    </Box>
  );
};

export default Home;
