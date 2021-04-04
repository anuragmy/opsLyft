import React from "react";
import { Form, Input, Button, Card, notification } from "antd";
// import { useHistory } from "react-router-dom";
import axios from "axios";

import { LOGIN_API } from "../../constants";

const Login = () => {
  // const history = useHistory();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const result = await axios.post(LOGIN_API, values);
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
