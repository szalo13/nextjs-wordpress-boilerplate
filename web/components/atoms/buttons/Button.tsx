import classNames from "classnames";
import { AnchorHTMLAttributes, DetailedHTMLProps, memo } from "react";
import styles from './Button.module.css';

interface IButtonPropTypes
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  size?: "xsm" | "sm" | "md" | "lg" | "xl";
  color?: "light-primary" | "primary" | "secondary" | "black";
  fullWidth?: boolean;
}

const SIZE_CLASSES = {
  xsm: "px-2 py-1 text-xsm",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-md",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const COLOR_CLASSES = {
  "light-primary": "bg-gray-100 text-black hover:bg-gray-200",
  primary: "bg-primary-500 hover:bg-primary-600 text-white",
  secondary: "bg-secondary-500 hover:bg-secondary-600 text-white",
  black: "bg-black hover:bg-gray-900 text-white",
};

const BASE_CLASSES =
  "block cursor-pointer font-sans rounded-md font-medium transition-colors duration-200";

export const buttonClasses = ({
  className,
  size = "md",
  fullWidth,
  color = "light-primary",
}: IButtonPropTypes) => {
  const sizeClasses = SIZE_CLASSES[size];
  const colorClasses = COLOR_CLASSES[color];

  return classNames([
    styles.button,
    className,
    fullWidth ? "w-full" : "w-fit",
    BASE_CLASSES,
    colorClasses,
    sizeClasses,
  ]);
};

const Button = ({
  className,
  size = "md",
  fullWidth,
  color = "light-primary",
  ...rest
}: IButtonPropTypes) => {
  return (
    <a
      className={buttonClasses({ className, size, fullWidth, color })}
      {...rest}
    />
  );
};

export default memo(Button);
