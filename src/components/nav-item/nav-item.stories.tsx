import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { NavItem, NavItemSize } from "./nav-item";
import { GitHub, LinkedIn, Twitter, BlogIcon, svgProps } from "../icons";

const Icons: Record<string, React.FC<svgProps> | undefined> = {
  none: undefined,
  GitHub: GitHub,
  LinkedIn: LinkedIn,
  Twitter: Twitter,
  BlogIcon: BlogIcon,
};

type storyProps = typeof NavItem & {
  iconValue: string;
};

export default {
  title: "Blog/NavItem",
  component: NavItem,
  argTypes: {
    iconValue: {
      options: Object.keys(Icons),
      control: { type: "select" },
      default: "none",
    },
  },
} as Meta<storyProps>;

const template: StoryFn<storyProps> = (args) => {
  return <NavItem {...args} icon={Icons[args.iconValue]} />;
};

export const navItemHref = template.bind({});
navItemHref.args = {
  label: "Text",
  iconValue: 'GitHub',
  href: "",
};

export const topNavItems:StoryFn<storyProps> = ({size}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        backgroundColor: "#4d0000",
        padding: ".5rem",
        justifyContent: 'flex-end'
      }}
    >
      <NavItem
        icon={BlogIcon}
        label="Blog"
        size={size}
        iconValue={""}
      />
      <NavItem
        icon={Twitter}
        label="Twitter"
        size={size}
        iconValue={""}
      />
      <NavItem
        icon={LinkedIn}
        label="LinkedIn"
        size={size}
        iconValue={""}
      />
      <NavItem
        icon={GitHub}
        label="Github"
        size={size}
        iconValue={""}
      />
    </div>
  );
};


export const topNavItemsVert:StoryFn<storyProps> = ({size}) => {
  return (
    <div
      style={{
        width: 'fit-content',
        gap: "1rem",
        backgroundColor: "#4d0000",
        padding: ".5rem",
        justifyContent: 'flex-end'
      }}
    >
      <NavItem
        icon={BlogIcon}
        label="Blog"
        size={size}
        iconValue={""}
      />
      <NavItem
        icon={Twitter}
        label="Twitter"
        size={size}
        iconValue={""}
      />
      <NavItem
        icon={LinkedIn}
        label="LinkedIn"
        size={size}
        iconValue={""}
      />
      <NavItem
        icon={GitHub}
        label="Github"
        size={size}
        iconValue={""}
      />
    </div>
  );
};