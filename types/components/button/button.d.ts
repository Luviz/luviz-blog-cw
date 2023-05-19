import { FC } from "react";
export type ButtonProps = {
    label: string;
    onClick: () => void;
};
export declare const Button: FC<ButtonProps>;
