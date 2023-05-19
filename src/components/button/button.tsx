import React, { FC } from "react";
import './style.css'

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
