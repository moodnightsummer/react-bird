import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  });
  return (
    <Card
      actions={[
        <div key="twit">
          게시글
          <br />0
        </div>,
        <div key="followings">
          <br />0
        </div>,
        <div key="followings">
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="Jelly" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
