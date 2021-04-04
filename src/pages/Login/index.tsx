import React from "react";
import { Form, Input, Button, Card, notification } from "antd";
// import { useHistory } from "react-router-dom";
import axios from "axios";

import { LOGIN_API, SIGNUP_API } from "../../constants";

const Login = () => {
  // const history = useHistory();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(true);

  const onFinish = async (values: any) => {
    const api = isLogin ? LOGIN_API : SIGNUP_API;
    setLoading(true);
    try {
      const result = await axios.post(api, values);
      // savong token in localstorage
      if (result.data.token) {
        console.log("saved in local storage");
        localStorage.setItem("token", result.data.token);
        window.location.href = "/dashboard";
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      notification.error({
        message: "Incorrect Email/Password",
        duration: 2,
      });
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSwitch = () => setIsLogin(!isLogin);

  return (
    <Card
      style={{
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Button type="link" onClick={handleSwitch}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Alrady Have an account? Log in"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
