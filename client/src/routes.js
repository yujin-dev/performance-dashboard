import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Marketcap = React.lazy(() => import('./views/Details/Marketcap/Marketcap'));
const Market = React.lazy(() => import('./views/Details/Market/Market'));


const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Trading' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/details/marketcap', name: 'Marketcap', component: Marketcap },
  { path: '/details/market', name: 'Market', component: Market },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
