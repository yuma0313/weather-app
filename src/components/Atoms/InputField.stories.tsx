import InputField, { InputFieldProps } from "./InputField";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: InputField,
  argTypes: {
    placeholder: { control: "text" },
    className: { control: "text" },
  },
} as Meta<typeof InputField>;

export const Default: StoryObj<InputFieldProps> = {
  args: {
    placeholder: "Tokyo",
    className: "text-gray-900 bg-gray-100 rounded-md p-2",
  },
};
