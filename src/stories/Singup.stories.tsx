import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Signup, TextInput } from "../../lib/storybook-poc";
import { Form, Formik } from "formik";
import { inputTypeProps } from "./TextInput.stories";
import { LabelProps } from "./Label.stories";

const meta: Meta<typeof Signup> = {
  component: Signup,
};

export default meta;

type Story = StoryObj<typeof Signup>;

export const EmptyForm: Story = {};

type inputTypeForSignup = {
  [key: string]: inputTypeProps & LabelProps;
};

const Template: StoryFn<inputTypeForSignup> = (args) => (
  <div>
    <Formik
      initialValues={{
        ...Object.fromEntries(Object.keys(args).map((key) => [key, ""])),
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        {Object.entries(args).map(([fieldName, fieldProps]) => (
          <TextInput key={fieldName} {...fieldProps} name={fieldName} />
        ))}
      </Form>
    </Formik>
  </div>
);

export const SignupWithAllValues = Template.bind({});
SignupWithAllValues.args = {
  name: {
    name: "name",
    id: "name",
    className: "text-6xl",
    placeholder: "Name",
    inputType: "text",
    info: "Name",
    value : "name"
  },
  email: {
    name: "email",
    id: "email",
    className: "text-6xl",
    placeholder: "Email",
    inputType: "email",
    info: "Email",
    value : 'Email'
  },
  password: {
    name: "password",
    id: "password",
    className: "text-6xl",
    placeholder: "Password",
    inputType: "password",
    info: "Password",
    value : "password"
  },
};