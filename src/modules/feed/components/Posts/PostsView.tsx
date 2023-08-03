import React from 'react'
import Post from '../Post';

type PostData = {
  id: number;
  content: string;
  createdTime: number;
  likes: number[];

  authorID: number;
  authorName: string;
  authorUsername: string;
}

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
        />
      ))}
    </div>
  )
}

export default PostsView