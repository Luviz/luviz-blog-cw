import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { GitHub } from "./github";
import { LinkedIn } from "./linkedin";
import { svgProps } from "./svg-props";
import { Twitter } from "./twitter";
import { BlogIcon } from "./blog-icon";

export default {
  title: "Blog/Icons",
  component: BlogIcon
} as Meta<typeof GitHub>;

export const icons: StoryFn<svgProps> = (args) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <GitHub {...args} />
      <LinkedIn {...args} />
      <Twitter {...args} />
      <BlogIcon {...args} />
    </div>
  );
};
icons.storyName = "Icons List";

export const blogIcon: StoryFn<svgProps> = (args) => (
  <div>
    <BlogIcon {...args} />
  </div>
);
blogIcon.storyName = "Blog Icon";


export const github: StoryFn<svgProps> = (args) => (
  <div>
    <GitHub {...args} />
  </div>
);
github.storyName = "GitHub";

export const linkedIn: StoryFn<svgProps> = (args) => (
  <div>
    <LinkedIn {...args} />
  </div>
);
linkedIn.storyName = "LinkedIn";

export const twitter: StoryFn<svgProps> = (args) => (
  <div>
    <Twitter {...args} />
  </div>
);
twitter.storyName = "Twitter";
