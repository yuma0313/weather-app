import InputField, { InputFieldProps } from "./InputField";

export default {
  title: "Atoms/InputField",
  component: InputField,
  argTypes: {
    placeholder: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => <InputField {...args} />;

//テンプレートを作成
export const Default = Template.bind({});
Default.args = {
  placeholder: "Tokyo",
  className: "text-gray-900 bg-gray-100 rounded-md p-2",
};
