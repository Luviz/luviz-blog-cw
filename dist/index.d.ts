import React, { FC } from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
};
declare const Button: FC<ButtonProps>;

type ThemeWrapper = {
    children?: React.ReactNode;
};
declare const ThemeWrapper: FC<ThemeWrapper>;

export { Button, ButtonProps, ThemeWrapper };
