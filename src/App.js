import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from './components/views/Waiter/Waiter';
import OrderNew from './components/views/OrderNew/OrderNewContainer';
import OrderSingle from './components/views/OrderSingle/OrderSingle';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/new'} component={OrderNew} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={OrderSingle} />
            {<Redirect from={process.env.PUBLIC_URL} to={'/home'} />}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;