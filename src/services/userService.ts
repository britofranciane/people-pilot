import { QueryClient } from '@tanstack/react-query';
import { api } from './api';
import { UserType } from '../types/userType';

const queryClient = new QueryClient();

export const fetchUsers = async (): Promise<UserType> => {
  const response = await api.get('/users');
  return response.data;
};

export const fetchUserById = async (id: string): Promise<UserType> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (data: UserType): Promise<UserType> => {
  const response = await api.post('/users', data);
  return response.data;
};

export const updateUser = async (
  data: UserType,
  id: string
): Promise<UserType> => {
  if (!id) throw new Error('Id é necessário');
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  if (!id) throw new Error('Id é necessário');

  try {
    await api.delete(`/users/${id}`);
    queryClient.invalidateQueries({ queryKey: ['users'] });
  } catch (error) {
    console.error('Erro ao deletar usuário: ', error);
    throw new Error('Erro ao deletar o usuário');
  }
};
