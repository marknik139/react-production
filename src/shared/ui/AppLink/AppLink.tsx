import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import { type FC, type PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinksTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinksTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
