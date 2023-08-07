import { create } from "zustand";
import { State, Actions, TUser } from "./index.types";

const useFeedStore = create<State & Actions>((set) => ({
  users: [],
  posts: [],
  lookupUser: {},

  setInitialData(users, posts) {
    const lookupUser: Record<number, TUser> = users.reduce((lookup: Record<number, TUser>, user) => {
      lookup[user.id] = user;
      return lookup;
    }, {});

    set({ users, posts, lookupUser })
  },
  addNewPost(post) {
    set(prevState => ({
      posts: [{ ...post, isNew: true }, ...prevState.posts]
    }))

    setTimeout(() => {
      set(prevState => {
        const index = prevState.posts.findIndex((aPost) => aPost.id === post.id);
        if (index === -1) return {};

        const posts = [...prevState.posts];
        posts[index].isNew = false;
        return { posts }
      })
    }, 3000)
  },
  prependPosts(posts) {
    set(prevState => ({
      posts: [...posts, ...prevState.posts]
    }));
  },
  appendPosts(posts) {
    set(prevState => ({
      posts: [...prevState.posts, ...posts]
    }));
  },
}));

export default useFeedStore;