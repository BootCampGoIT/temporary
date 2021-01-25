import { optionRoutes } from '../../routes/optionRoutes';
import { withRouter } from 'react-router-dom';

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const DetailsNav = ({match, ...props}) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {optionRoutes.map(({ path, component, exact, url }) => (
                   
                    <Route
                        key={path}
                        path={`${match.url}${url}`}
                        exact={exact}
                        component={component}
                    />
               
                ))}
            </Switch>
        </Suspense>
    );
};

export default withRouter(DetailsNav);
