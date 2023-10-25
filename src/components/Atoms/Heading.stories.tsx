import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Atoms/Heading",
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
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: "h1",
  children: "Heading",
  className: "text-gray-900",
};
