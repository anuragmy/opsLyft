import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import { Dashboard, Login } from "./pages";
import PrivateRoute from "./privateRoute";

// checking for token

const Routes = () => {
  const [token, setToken] = React.useState<string>("");
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  }, [token]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          component={() => (token ? <Redirect to="/dashboard" /> : <Login />)}
          path="/"
        />
        <PrivateRoute
          exact
          component={Dashboard}
          token={token}
          path="/dashboard"
        />
        <Route
          exact
          path="/login"
          component={() => (token ? <Redirect to="/dashboard" /> : <Login />)}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
