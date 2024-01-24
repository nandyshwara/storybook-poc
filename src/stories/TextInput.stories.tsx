import { StoryFn } from "@storybook/react";
import { Formik } from "formik";
import TextInput from "../../lib/components/TextInput";
import { NameLabel } from "./Label.stories";

export default {
  title: "TextInput",
  component: TextInput,
};

export type inputTypeProps = {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  inputType?: string;
  options?: string[];
};

const SingleTemplate: StoryFn<inputTypeProps> = (args) => (
  <div>
    <NameLabel info={args.name} value={args.name} />
    <Formik
      initialValues={{ [args.name]: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <TextInput {...args} />
    </Formik>
  </div>
);

export const SingleInput = SingleTemplate.bind({});
SingleInput.args = {
  name: "name",
  id: "name",
  className: "text-6xl",
  placeholder: "name",
  inputType: "text",
};

export const EmailInput = SingleTemplate.bind({});
EmailInput.args = {
  name: "email",
  id: "email",
  className: "text-6xl",
  placeholder: "email",
  inputType: "text",
};

export const PasswordInput = SingleTemplate.bind({});
PasswordInput.args = {
  name: "password",
  id: "password",
  className: "text-6xl",
  placeholder: "password",
  inputType: "text",
};
