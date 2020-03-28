import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import Main from './pages/Main';
import Statistics from './pages/Statistics';

import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
          path="/login"
          component={Main}
				/>
				<PrivateRoute
          path="/"
          component={Statistics}
				/>
			</Switch>
		</BrowserRouter>
	);
}
