import { TPost, TUser } from "./stores/FeedStore/index.types";

interface IFeedAPI {
  getInitialData: () => Promise<{ users: TUser[], posts: TPost[] }>;
}

const FeedAPI: IFeedAPI = {
  getInitialData: async () => {
    const users: TUser[] = [
      {
        id: 0,
        username: "rico.putra",
        email: "rico.putra@gmail.com",
        name: "Rico Putra",
        profilePictureURL: ""
      },
      {
        id: 1,
        username: "ryu.kai",
        email: "ryu.kai@gmail.com",
        name: "Ryu Kai",
        profilePictureURL: ""
      },
      {
        id: 2,
        username: "lala.sari",
        email: "lala.sari@gmail.com",
        name: "Lala Sari",
        profilePictureURL: ""
      },
    ];

    const posts: TPost[] = [
      {
        id: 0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        createdTime: 1693180800,
        authorID: 0,
        likes: [1, 2]
      },
      {
        id: 1,
        content: "Nostrum corporis quod rem ut dicta, praesentium inventore animi?",
        createdTime: 1693180800,
        authorID: 1,
        likes: [2]
      },
      {
        id: 2,
        content: "Impedit provident magni quos maxime, nesciunt velit.",
        createdTime: 1693180800,
        authorID: 2,
        likes: [1]
      },
      {
        id: 3,
        content: "Expedita impedit sunt voluptatem totam repellendus?",
        createdTime: 1693180800,
        authorID: 0,
        likes: [1]
      }
    ];

    return { users, posts }
  }
}

export default FeedAPI;