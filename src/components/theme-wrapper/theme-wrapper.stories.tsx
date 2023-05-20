import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeWrapper } from "./theme-wrapper";
import { NavItem } from "../nav-item";

export default {
  title: "Blog/themeWrapper",
  component: ThemeWrapper,
} as Meta<typeof ThemeWrapper>;

const template: StoryFn<typeof NavItem> = (args) => (
  <ThemeWrapper>
    <NavItem label="hello" />
  </ThemeWrapper>
);

export const theme = template.bind({})