import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Feed/Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    label: "Share",
    variant: "primary"
  }
}