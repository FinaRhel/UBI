import * as React from 'react';
import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

import { PageLoader } from 'widgets/PageLoader';
import {RequireAuth} from "./RequireAuth";

type Props = {

};

const AppRouter = memo((props: Props) => {
    const renderWithAuthWrapper = React.useCallback((route: AppRoutesProps) => {
        const { element, path, authOnly } = route;

        const Component = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth children={Component} /> : Component}
            />
        )
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithAuthWrapper)}
        </Routes>
    )
});

export { AppRouter };
