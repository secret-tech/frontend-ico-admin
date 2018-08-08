import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Investors from '../../investors/Investors';
import Status from '../../status/Status';

import * as routes from '../../../routes';

class AppWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.INVESTORS} component={Investors}/>
        <Route exact path={routes.STATUS} component={Status}/>
        <Redirect exact from="/" to={routes.STATUS} />
      </Switch>
    );
  }
}

export default connect()(AppWrapper);
