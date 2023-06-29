import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = ButtonTheme.CLEAR, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(s.Button, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
