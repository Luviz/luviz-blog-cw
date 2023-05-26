import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { GitHub } from "./github";

export default {
  title: "Blog/Icons",
  component: GitHub,
} as Meta<typeof GitHub>;

export const githubIcon: StoryFn<typeof GitHub> = (args) => (
  <div>
    <GitHub {...args} />
  </div>
);
