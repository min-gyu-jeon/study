import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserDetail({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setUser(null);
      return;
    }

    setLoading(true);
    setError(null);
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (!userId) {
    return (
      <div className="detail-card empty animate-fade-in">
        <div className="empty-state">
          <div className="empty-icon">👤</div>
          <h3>No User Selected</h3>
          <p>Select a user from the directory list on the left to view detailed information.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="detail-card loading animate-fade-in">
        <div className="spinner"></div>
        <p>사용자 상세 정보를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-card error animate-fade-in">
        <p className="error-text">⚠️ 오류 발생: {error}</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="detail-card animate-fade-in">
      <div className="detail-header">
        <div className="detail-avatar">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="detail-name">{user.name}</h2>
          <p className="detail-username">@{user.username}</p>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <h3>Contact Info</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{user.phone}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Website</span>
              <span className="info-value">
                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Address</h3>
          <p className="address-text">
            {user.address.suite}, {user.address.street},<br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        <div className="detail-section">
          <h3>Company</h3>
          <div className="company-info">
            <div className="company-name">{user.company.name}</div>
            <div className="company-catchphrase">"{user.company.catchPhrase}"</div>
            <div className="company-bs">{user.company.bs}</div>
          </div>
        </div>
      </div>

      <div className="detail-footer">
        <Link to={`/posts?userId=${user.id}`} className="btn btn-primary btn-full-width">
          💬 View User's Posts
        </Link>
      </div>
    </div>
  );
}
