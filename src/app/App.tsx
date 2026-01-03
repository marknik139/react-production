import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss';

import {AppRouter} from "app/providers/AppRouter";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    );
};