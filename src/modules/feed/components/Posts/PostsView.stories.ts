import type { Meta, StoryObj } from "@storybook/react";
import PostsView from "./PostsView";

const meta = {
  title: "Feed/Components/PostsView",
  component: PostsView,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoPost: Story = {
  args: {
    posts: []
  }
}

export const Posts: Story = {
  args: {
    posts: [
      {
        id: 0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        createdTime: 1693180800,
        likes: [1, 2],
        authorID: 0,
        authorName: "Rico Putra",
        authorUsername: "@rico_rpp21"
      },
      {
        id: 1,
        content: "Nostrum corporis quod rem ut dicta, praesentium inventore animi?",
        createdTime: 1693180800,
        likes: [2],
        authorID: 1,
        authorName: "Ryu Kai",
        authorUsername: "@ryu.kai"
      },
      {
        id: 2,
        content: "Impedit provident magni quos maxime, nesciunt velit.",
        createdTime: 1693180800,
        likes: [1],
        authorID: 2,
        authorName: "Lala Sari",
        authorUsername: "@lala.sari"
      },
      {
        id: 3,
        content: "Expedita impedit sunt voluptatem totam repellendus?",
        createdTime: 1693180800,
        likes: [1],
        authorID: 0,
        authorName: "Rico Putra",
        authorUsername: "@rico_rpp21"
      }
    ]
  }
}