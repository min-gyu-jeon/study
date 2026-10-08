import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserDetail from '../components/UserDetail';

export default function User() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSelectUser = (id) => {
    setSelectedUserId(id);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Users</h1>
        <p className="page-description">Browse and manage platform users and their profile details.</p>
      </div>
      <div className="two-column-layout">
        <div className="column-left">
          <UserList onSelectUser={handleSelectUser} selectedUserId={selectedUserId} />
        </div>
        <div className="column-right">
          <UserDetail userId={selectedUserId} />
        </div>
      </div>
    </div>
  );
}
