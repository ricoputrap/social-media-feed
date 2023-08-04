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