import Label from "../../lib/components/Label";
import { StoryFn } from "@storybook/react";

export default {
  title: 'Label',
  component: Label
};

export type LabelProps = {
  info: string;
  value: string;
};

const Template: StoryFn<LabelProps> = (args) => (
  <Label {...args} />
);

export const NameLabel = Template.bind({});
NameLabel.args = {
  info: "Name",
  value: "Name",
};

export const EmailLabel = Template.bind({});
EmailLabel.args = {
  info: "Email",
  value: "Email",
};

export const PasswordLabel = Template.bind({});
PasswordLabel.args = {
  info: "Password",
  value: "Password",
};

export const GenderLabel = Template.bind({});
GenderLabel.args = {
  info: "Gender",
  value: "Gender",
};
