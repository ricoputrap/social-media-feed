import React from 'react'
import PostsView from './PostsView';
import useFeed from '../../hooks/useFeed'

const Posts = () => {
  const { allPosts } = useFeed();
  return (
    <div id="posts-container">
      <PostsView posts={allPosts} />
    </div>
  )
}

export default Posts