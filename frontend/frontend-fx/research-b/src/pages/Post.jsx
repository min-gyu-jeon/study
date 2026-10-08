import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostList from '../components/PostList'
import PostDetail from '../components/PostDetail'
import './Post.css'

function Post() {
  const [searchParams] = useSearchParams() //query-string 데이터 읽기(여러개의 데이터 포함)
  const userId = searchParams.get('userId') //query-string 데이터에서 개별 값 읽기 (없으면 NULL)
  const [selectedPostId, setSelectedPostId] = useState(null)

  return (
    <div className="page-layout">
      <div className="list-panel">
        <PostList
          userId={userId ? Number(userId) : null}
          selectedPostId={selectedPostId}
          onSelect={setSelectedPostId}
        />
      </div>
      <div className="detail-panel">
        <PostDetail postId={selectedPostId} />
      </div>
    </div>
  )
}

export default Post
