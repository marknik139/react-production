import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </AppButton>
    );
};
