import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList({ onSelectUser, selectedUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>사용자 정보를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">⚠️ 데이터를 불러오는 중 오류가 발생했습니다: {error}</p>
      </div>
    );
  }

  return (
    <div className="list-card animate-fade-in">
      <div className="card-header">
        <h2 className="card-title">User Directory</h2>
        <span className="badge">{users.length} members</span>
      </div>
      <div className="table-wrapper">
        <table className="interactive-table">
          <thead>
            <tr>
              <th style={{ width: '60px' }}>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr 
                key={user.id} 
                className={selectedUserId === user.id ? 'active-row' : ''}
                onClick={() => onSelectUser(user.id)}
              >
                <td className="id-col">#{user.id}</td>
                <td>
                  <div className="user-name-cell">
                    <div className="avatar-placeholder">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="user-name">{user.name}</div>
                      <div className="user-username">@{user.username}</div>
                    </div>
                  </div>
                </td>
                <td className="email-col">{user.email}</td>
                <td className="company-col">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
