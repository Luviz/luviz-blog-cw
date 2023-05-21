import { FC } from "react";
import "./style.css";
export type NavItemProps = {
    onClick?: () => void;
    href?: string;
    label: string;
};
export declare const NavItem: FC<NavItemProps>;
