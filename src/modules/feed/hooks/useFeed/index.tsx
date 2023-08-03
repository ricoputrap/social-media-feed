import React, { useEffect, useMemo } from 'react'
import useFeedStore from '../../stores/FeedStore';
import FeedAPI from '../../API';
import { PostData } from './index.types';
import { TUser } from '../../stores/FeedStore/index.types';

interface ReturnValue {
  allPosts: PostData[];
}

const useFeed = (): ReturnValue => {
  const setInitialData = useFeedStore((state) => state.setInitialData);
  const lookupUser = useFeedStore((state) => state.lookupUser);
  const posts = useFeedStore((state) => state.posts);

  const allPosts: PostData[] = useMemo(() => {
    if (posts.length == 0) return [];

    const result: PostData[] = posts.map((post) => {
      const user: TUser = lookupUser[post.authorID];

      return {
        id: post.id,
        content: post.content,
        createdTime: post.createdTime,
        likes: post.likes,

        authorID: user.id,
        authorName: user.name,
        authorUsername: user.username
      }
    });

    return result;
  }, [posts, lookupUser]);

  useEffect(() => {
    const getInitialData = async () => {
      const { users, posts } = await FeedAPI.getInitialData();
      setInitialData(users, posts);
    }
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { allPosts }
}

export default useFeed