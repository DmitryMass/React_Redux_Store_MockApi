import React from 'react';
import { useSelector } from 'react-redux';
import AdminForm from './Form/component';
import List from './List/component';

const Admin = () => {
  const editElement = useSelector((state) => state.editCurrentProduct);

  return (
    <main className="main">
      <div className="container">
        <AdminForm editElement={editElement} key={editElement.id} />
        <List />
      </div>
    </main>
  );
};

export default Admin;
