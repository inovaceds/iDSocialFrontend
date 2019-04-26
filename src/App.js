import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import NewSuscriber from './components/suscribers/NewSuscriber';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <React.Fragment>
          <Switch>
            <Route exact path="/" component={NewSuscriber} />
          </Switch>
      </React.Fragment>
    </Router>
  </Provider>
  );
}

export default App;
