import { FC } from "react";
import './style.css';
export type ButtonProps = {
    label: string;
    onClick: () => void;
};
export declare const Button: FC<ButtonProps>;
