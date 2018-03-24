import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Connection from './pages/status/connection/Connection';

export default class CustomRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/status/connection" component={Connection} />
			</Switch>
		)
	}
}