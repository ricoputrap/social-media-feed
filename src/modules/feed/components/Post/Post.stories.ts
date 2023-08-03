import type { Meta, StoryObj } from "@storybook/react";
import Post from ".";

const meta = {
  title: "Feed/Components/Post",
  component: Post,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PostBasic: Story = {
  args: {
    id: 0,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt veritatis, minima eligendi cupiditate minus consequuntur quo autem fugiat facilis recusandae dolorem, repudiandae perferendis, eius necessitatibus ex debitis rem enim!",
    createdTime: 0,
    likes: [],
    authorID: 0,
    authorName: "Rico Putra",
    authorUsername: "@rico_rpp21"
  }
}