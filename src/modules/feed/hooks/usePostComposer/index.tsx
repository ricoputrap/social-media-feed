import React, { useState } from 'react'
import useFeedStore from '../../stores/FeedStore';
import { TPost } from '../../stores/FeedStore/index.types';


const usePostComposer = () => {
  const addNewPost = useFeedStore((state) => state.addNewPost);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const createNewPost = async (authorID: number, content: string) => {
    return new Promise<void>((resolve) => {
      if (!content) return;

      setIsSubmitting(true);

      setTimeout(() => {
        const newPost: TPost = {
          id: Math.random(),
          content,
          createdTime: new Date().getTime(),
          likes: [],
          authorID
        }
        addNewPost(newPost);
        setIsSubmitting(false);
        resolve();
      }, 1500);
    })
  }

  return { isSubmitting, createNewPost }
}

export default usePostComposer