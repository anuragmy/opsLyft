import React from "react";
import { Route, Redirect } from "react-router-dom";

interface IPrivateRouteProps {
  component: any;
  token?: string;
  exact: any;
  path: string;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  token,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
