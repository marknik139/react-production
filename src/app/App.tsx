import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss';

import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Theme</button>
            <AppRouter/>
        </div>
    );
};