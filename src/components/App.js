import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from './Loader';

const LoadableSpeed = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './SpeedLaunch'),
  loading: () =>  <Loader loading={true} />
});

const App = () => (
      <Switch>
        <Route exact path="/" component={LoadableSpeed} />
        <Redirect from="*" to={"/"} />
      </Switch>
  
);

export default App;
