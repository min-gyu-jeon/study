import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostDetail({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) {
      setPost(null);
      setComments([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    // Fetch post detail
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
        
        // Fetch comments as well for premium UX
        setCommentsLoading(true);
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      })
      .then(response => {
        if (response) {
          setComments(response.data);
        }
        setCommentsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        setCommentsLoading(false);
      });
  }, [postId]);

  if (!postId) {
    return (
      <div className="detail-card empty animate-fade-in">
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No Post Selected</h3>
          <p>Select a post from the list on the left to read the full content and user comments.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="detail-card loading animate-fade-in">
        <div className="spinner"></div>
        <p>게시물 상세 정보를 불러오는 중...</p>
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

  if (!post) return null;

  return (
    <div className="detail-card animate-fade-in">
      <div className="post-header-badge">
        <span>Post #{post.id}</span>
        <span className="user-badge">Author ID: {post.userId}</span>
      </div>
      
      <h2 className="post-detail-title">{post.title}</h2>
      
      <div className="post-detail-body">
        {post.body}
      </div>

      <div className="comments-section">
        <div className="comments-header">
          <h3>Discussion</h3>
          <span className="comment-count">{comments.length} comments</span>
        </div>

        {commentsLoading ? (
          <div className="comments-loading">
            <div className="spinner spinner-sm"></div>
            <span>Loading comments...</span>
          </div>
        ) : (
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment-item">
                <div className="comment-meta">
                  <span className="comment-author">{comment.name}</span>
                  <span className="comment-email">{comment.email}</span>
                </div>
                <div className="comment-body">
                  {comment.body}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
