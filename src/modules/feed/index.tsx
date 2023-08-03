import React from 'react'
import Posts from './components/Posts'

const FeedUI: React.FC = () => {
  return (
    <div className="
      min-h-screen flex flex-col items-center justify-between
    ">
      <div className="max-w-md">
        <Posts />
      </div>
    </div>
  )
}

export default FeedUI