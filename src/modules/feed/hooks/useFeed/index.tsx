import useFeedStore from '../../stores/FeedStore';
import { PostData } from './index.types';
import { TUser } from '../../stores/FeedStore/index.types';

interface ReturnValue {
  allPosts: PostData[];
}

const useFeed = (): ReturnValue => {
  const lookupUser = useFeedStore((state) => state.lookupUser);
  const posts = useFeedStore((state) => state.posts);

  const allPosts = posts.map((post) => {
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
  })

  return { allPosts }
}

export default useFeed