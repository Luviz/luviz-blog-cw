import React, { FC } from "react";
import "./style.css";

export type NavItemProps = {
  onClick?: () => void;
  href?: string;
  label: string;
};

export const NavItem: FC<NavItemProps> = ({ label, href, onClick }) => {
  return (
    <a className="nav-item-container" onClick={onClick} href={href}>
      {label}
    </a>
  );
};
