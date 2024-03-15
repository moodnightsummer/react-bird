import propTypes from "prop-types";
import React from "react";
import Link from "next/link";
import "antd/dist/antd";
import { Col, Input, Menu, Row } from "antd";
import "antd/dist/antd.css";
import UseProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
.ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
}
.ant-col:first-child {
    padding-left: 0 !important;
}

.ant-col:last-child {
    padding-right: 0 !important;
}
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // useSelector = react-redux에 있음
  const { isLoggedIn } = useSelector((state) => state.user);
  console.log(isLoggedIn);
  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="/">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profile">
          <SearchInput />
        </Menu.Item>
        <Menu.Item key="/signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UseProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://portfolio-five-nu-90.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by moodnightsummer
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};
export default AppLayout;
