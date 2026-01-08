import { classNames } from 'shared/lib/classNames';
import cls from './AppButton.module.scss';
import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const AppButton: FC<PropsWithChildren<AppButtonProps>> = (props: AppButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
