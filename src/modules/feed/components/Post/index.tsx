import Image from 'next/image';
import React from 'react'

const PROFILE_PIC_URL = "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80";

interface Props {
  id: number;
  content: string;
  createdTime: number;
  likes: number[];

  authorID: number;
  authorName: string;
  authorUsername: string;
}

const Post: React.FC<Props> = ({
  id,
  content,
  createdTime,
  likes,
  authorName,
  authorUsername
}) => {
  return (
    <div className="post-item p-4 border-gray-200 border-2 rounded-xl">
      <div>
        <div className="flex items-center gap-1">
          <Image
            src={PROFILE_PIC_URL}
            alt="profile-pic"
            className="w-8 h-8 object-cover rounded-full mr-1"
            width={30}
            height={30}
          />
          <p className="text-sm font-semibold">
            {authorName}
          </p>
          <p className="text-sm text-gray-500">
            @{authorUsername}
          </p>
        </div>
      </div>

      <p className="text-sm ml-10">
        {content}
      </p>
    </div>
  )
}

export default Post