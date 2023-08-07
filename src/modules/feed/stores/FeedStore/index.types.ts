export type TUser = {
  id: number;
  username: string;
  email: string;
  name: string;
  profilePictureURL: string;
}

export type TPost = {
  id: number;
  content: string;
  createdTime: number;
  authorID: number; // FK to `TUser.id`
  likes: number[]; // contains the ID of users who like the post
  isNew?: boolean;
};

export type State = {
  users: TUser[]; // size = n
  posts: TPost[]; // size = m

  // lookup
  lookupUser: Record<number, TUser>; // size = n
}

export type Actions = {
  setInitialData: (users: TUser[], posts: TPost[]) => void;
  addNewPost: (post: TPost) => void;
  prependPosts: (posts: TPost[]) => void;
  appendPosts: (posts: TPost[]) => void;
}