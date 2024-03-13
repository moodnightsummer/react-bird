import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch;
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          트위
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
