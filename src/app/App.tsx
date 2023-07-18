import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

function App() {
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
            <div id="portal" />
        </div>
    );
}

export default App;
