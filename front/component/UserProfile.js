import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import "antd/dist/antd.css";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
