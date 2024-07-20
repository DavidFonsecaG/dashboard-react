import React from 'react'
import { useSelector } from 'react-redux';
import AdminRouter from './AdminRouter'
// import RepRouter from './RepRouter'
import ClientRouter from './ClientRouter'

const RoleRouter = () => {

  const { user } = useSelector(state => state.auth);

  switch ( user.role ) {
    case 'Admin':
      return <AdminRouter />
    case 'Advisor':
      return <AdminRouter />
    case 'Student':
      return <ClientRouter />
  };
};

export default RoleRouter;

