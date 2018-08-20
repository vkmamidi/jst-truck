import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import  Login  from '../components/Login';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path='/dashboard' component = {ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export {AppRouter};
