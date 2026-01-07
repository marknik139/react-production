import {classNames} from "shared/lib/classNames";
import 'app/styles/index.scss';

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

export const App = () => {
    const {theme} = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};