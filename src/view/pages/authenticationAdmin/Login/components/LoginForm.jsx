import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  ADMIN_NAME,
  ADMIN_USERNAME,
  ADMIN_MAIL,
} from "../../../../../redux/customise/customiseTypes";

import { FiUser } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";

import { Button, Checkbox, Form, Input } from "antd";

import "./Login.css";
import { usePermissionContext } from "../../../../../context/PermissionContext";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();
  const { fetchApi } = usePermissionContext()

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) history.push("/");
  }, [isAuth]);

  const tryLogin = async () => {
    await axios({
      method: "POST",
      url: "https://apiwo.tokoweb.live/api/login",
      data: { username: username, password: password },
    })
      .then((response) => {
        console.log(response.data.data.data.access_menu_id);
        console.log(response.data.data.access_token);
        localStorage.setItem(
          "token",
          `${response.data.data.token_type} ${response.data.data.access_token}`
        );
        localStorage.setItem("id", response.data.data.data.id)

        props.login({
          adminName: response.data.data.name,
          adminUsername: response.data.data.username,
          adminMail: response.data.data.email,
        });

        setIsAuth(true);
        fetchApi()
      })
      .catch((err) => {
        alert("Gagal Login!");
      });
  };

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<FiUser />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<GiPadlock />}
            placeholder="input placeholder"
            className="ant-col"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <div className="custom-redirect-container">
          <Checkbox>Remember me</Checkbox>
          <a href="/admin/register" className="custom-redirect-login">
            belum punya akun?
          </a>
        </div>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={tryLogin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    adminUsername: state.adminUsername,
    adminName: state.adminName,
    adminEmail: state.adminEmail,
  };
};

const mapDispatcherToProps = (dispather) => {
  return {
    login: (data) => {
      dispather({ type: ADMIN_NAME, payload: data.adminName });
      dispather({ type: ADMIN_USERNAME, payload: data.adminUser });
      dispather({ type: ADMIN_MAIL, payload: data.adminMail });
    },
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(LoginForm);
