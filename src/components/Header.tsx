import React from "react";
import { Button } from "antd";
// import { useHistory } from "react-router-dom";

const Header = () => {
  //  const history = useHistory();
  const [isLogout, setIsLogout] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) setIsLogout(true);
  }, []);

  const logout = () => {
    // deleting token from localstorage
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="App">
      <header className="App-header">
        Covid Tracker
        {isLogout && (
          <Button
            type="link"
            style={{ position: "fixed", right: 10 }}
            onClick={logout}
          >
            Logout
          </Button>
        )}
      </header>
    </div>
  );
};

export default Header;
