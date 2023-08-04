import React, { useEffect } from 'react'
import useFeedStore from '../stores/FeedStore';
import { TPost, TUser } from '../stores/FeedStore/index.types';

interface TInitialData {
  users: TUser[],
  posts: TPost[]
}

const useInit = (initialData: TInitialData) => {
  const setInitialData = useFeedStore((state) => state.setInitialData);

  useEffect(() => {
    setInitialData(initialData.users, initialData.posts);
  }, [initialData])
}

export default useInit