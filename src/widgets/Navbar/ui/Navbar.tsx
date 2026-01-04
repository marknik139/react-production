import {classNames} from "shared/lib/classNames"
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(cls.links)}>
                <AppLink className={classNames(cls.mainLink)} to={'/'}>
                    Main
                </AppLink>
                <AppLink to={'/about'}>
                    About
                </AppLink>
            </div>
        </div>
    );
};