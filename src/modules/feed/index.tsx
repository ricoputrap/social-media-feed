import React from 'react'
import Header from './components/Header'
import PostComposer from './components/PostComposer'
import Posts from './components/Posts'

const FeedUI: React.FC = () => {
  return (
    <div className="
      min-h-screen flex flex-col items-center justify-between pb-5
    ">
      <div className="max-w-md">
        <Header />
        <div className="flex flex-col gap-6">
          <PostComposer authorID={1} />
          <Posts />
        </div>
      </div>
    </div>
  )
}

export default FeedUI