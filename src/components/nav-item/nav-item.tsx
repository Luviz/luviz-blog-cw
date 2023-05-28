import React, { FC, useState } from "react";
import "./style.css";
import { svgProps } from "../icons";

export enum NavItemSize {
  small = "small",
  large = "large",
}

export type NavItemProps = {
  iconValue: any;
  label: string;
  icon?: FC<svgProps>;
  onClick?: () => void;
  href?: string;
  size?: NavItemSize;
};

export const NavItem: FC<NavItemProps> = ({
  label,
  href,
  onClick,
  icon: SVGIcon,
  size = NavItemSize.large,
}) => {
  const renderText = size === NavItemSize.large || !!!SVGIcon;
  return (
    <a
      className="nav-item-anchor "
      onClick={onClick}
      href={href}
    >
      <div className="nav-item-container">
        {SVGIcon && <SVGIcon fill="#ccc" height="1.5rem" width="1.5rem" />}
        <span className="nav-item-text" data-hidden={!renderText}>
          {label}
        </span>
      </div>
    </a>
  );
};
