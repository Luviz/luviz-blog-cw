import React, { FC } from "react";
import "./styles.css";

type ThemeWrapper = {
  children?: React.ReactNode;
};

export const ThemeWrapper: FC<ThemeWrapper> = ({ children }) => {
  return <div className="luviz-blog">{children}</div>;
};
