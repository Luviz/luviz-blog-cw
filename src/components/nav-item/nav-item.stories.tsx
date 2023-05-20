import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { NavItem } from "./nav-item";

export default {
  title: "Blog/NavItem",
  component: NavItem,
} as Meta<typeof NavItem>;

const template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const navItemHref = template.bind({});
navItemHref.args = {
  label: "Text",
  href: ""
};
