import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss';

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />}/>
                    <Route path={'/about'} element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};