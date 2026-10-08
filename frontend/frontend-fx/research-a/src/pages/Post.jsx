import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';

export default function Post() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Clear selected post when user filter changes
  useEffect(() => {
    setSelectedPostId(null);
  }, [userId]);

  const handleSelectPost = (id) => {
    setSelectedPostId(id);
  };

  const handleClearFilter = () => {
    setSearchParams({});
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Posts</h1>
        <p className="page-description">Explore shared articles, tutorials, and community discussion boards.</p>
      </div>
      <div className="two-column-layout">
        <div className="column-left">
          <PostList 
            userId={userId} 
            onSelectPost={handleSelectPost} 
            selectedPostId={selectedPostId} 
            onClearFilter={handleClearFilter}
          />
        </div>
        <div className="column-right">
          <PostDetail postId={selectedPostId} />
        </div>
      </div>
    </div>
  );
}
