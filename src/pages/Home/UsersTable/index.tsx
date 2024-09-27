import React from 'react';
import { CustomDataGrid, CustomButton } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, Skeleton } from '@mui/material';
import { formatCPF, formatPhoneNumber } from '@utils/index';
import {
  DeleteOutlineOutlined,
  ModeEditOutlineOutlined,
} from '@mui/icons-material';
import { GridColDef } from '@mui/x-data-grid';
import { UserType } from 'types/userType';

interface Props {
  users: UserType[];
  isLoading: boolean;
  handleDeleteClick: (id: string) => void;
}

const UsersTable: React.FC<Props> = ({
  users,
  isLoading,
  handleDeleteClick,
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:768px)');

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 200 : undefined,
      sortable: false,
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <span style={{ fontWeight: 600 }}>{row.name}</span>
        ),
      type: 'string',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 200 : undefined,
      sortable: false,
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? <Skeleton /> : row.email,
      type: 'string',
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 130 : undefined,
      sortable: false,
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? <Skeleton /> : formatCPF(row.cpf),
      type: 'string',
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 180,
      sortable: false,
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? <Skeleton /> : formatPhoneNumber(row.phone),
      type: 'string',
    },
    {
      field: 'address',
      headerName: 'Endereço',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 220 : undefined,
      sortable: false,
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? <Skeleton /> : row.address,
      type: 'string',
    },
    {
      field: 'edit',
      headerName: '',
      width: 110,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <CustomButton
            size="small"
            variant="outlined"
            color="success"
            onClick={() => navigate(`/user/edit/${row.id}`)}
            endIcon={<ModeEditOutlineOutlined />}
          >
            Editar
          </CustomButton>
        ),
      type: 'string',
    },
    {
      field: 'delete',
      headerName: '',
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      headerAlign: 'center',
      renderCell: ({ row }: { row: UserType }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <CustomButton
            size="small"
            color="error"
            variant="outlined"
            onClick={() => handleDeleteClick(row.id)}
            endIcon={<DeleteOutlineOutlined />}
          >
            Apagar
          </CustomButton>
        ),
      type: 'string',
    },
  ];

  return (
    <CustomDataGrid isLoading={isLoading} rows={users} columns={columns} />
  );
};

export default UsersTable;
