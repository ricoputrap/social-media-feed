import React from 'react'
import { PostData } from '../../hooks/useFeed/index.types';
import Post from '../Post';

interface Props {
  posts: PostData[];
}

const PostsView: React.FC<Props> = ({ posts }) => {
  return (
    <div id="posts-view" className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          content={post.content}
          createdTime={post.createdTime}
          likes={post.likes}
          authorID={post.authorID}
          authorName={post.authorName}
          authorUsername={post.authorUsername}
          isNew={post.isNew}
        />
      ))}
    </div>
  )
}

export default PostsView