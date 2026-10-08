import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostList({ userId, onSelectPost, selectedPostId, onClearFilter }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const url = userId 
      ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      : 'https://jsonplaceholder.typicode.com/posts';

    axios.get(url)
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>게시물 목록을 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">⚠️ 게시물을 불러오는 중 오류가 발생했습니다: {error}</p>
      </div>
    );
  }

  return (
    <div className="list-card animate-fade-in">
      <div className="card-header">
        <div>
          <h2 className="card-title">Posts</h2>
          <p className="card-subtitle">
            {userId ? `Showing posts by User #${userId}` : 'Showing all articles'}
          </p>
        </div>
        <div className="header-actions">
          <span className="badge">{posts.length} articles</span>
          {userId && (
            <button className="btn btn-secondary btn-sm" onClick={onClearFilter}>
              Show All
            </button>
          )}
        </div>
      </div>
      <div className="table-wrapper">
        <table className="interactive-table">
          <thead>
            <tr>
              <th style={{ width: '60px' }}>ID</th>
              <th style={{ width: '80px' }}>User</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr 
                key={post.id} 
                className={selectedPostId === post.id ? 'active-row' : ''}
                onClick={() => onSelectPost(post.id)}
              >
                <td className="id-col">#{post.id}</td>
                <td className="user-id-col">
                  <span className="user-badge">User {post.userId}</span>
                </td>
                <td className="post-title-col">
                  <div className="post-title">{post.title}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
