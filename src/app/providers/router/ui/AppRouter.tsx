import * as React from 'react';
import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {routeConfig} from "shared/config/routeConfig/routeConfig";

type Props = {

};

const AppRouter = (props: Props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                  <Route
                    key={path}
                    path={path}
                    element={(
                      <Suspense fallback={<div>Loading...</div>}>
                          <div className="page-wrapper">
                              {element}
                          </div>
                      </Suspense>
                    )}
                  />
                ))}
            </Routes>
        </Suspense>
    );
};

export { AppRouter };