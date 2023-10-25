import Heading, { HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
    children: { control: "text" },
    className: { control: "text" },
  },
} as Meta<typeof Heading>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    level: "h1",
    children: "Heading",
    className: "text-gray-900",
  },
};
