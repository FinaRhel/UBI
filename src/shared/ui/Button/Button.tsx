import { classNames } from "shared/lib/classNames/classNames";
import s from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = props;
    return (
        <button className={classNames(s.Button, {}, [className, s[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
