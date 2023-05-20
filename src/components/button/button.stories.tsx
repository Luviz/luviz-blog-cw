import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Blog/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const MyMeh = Template.bind({});
MyMeh.args = {
  label: "Meh!",
  onClick: () => console.log("meh!"),
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};
