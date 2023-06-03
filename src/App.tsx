import {Suspense, useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import classNames from "./helpers/classNames/classNames";

function App() {
    const { theme, toggleTheme } = useTheme();

    return(
            <div className={classNames('app', {}, [theme])}>
                <button onClick={toggleTheme}>THEME</button>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync />} />
                        <Route path={'/'} />
                    </Routes>
                </Suspense>
            </div>
    )
}

export default App;