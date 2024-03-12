import AppLayout from "../component/AppLayout";
import React from "react";
import Head from "next/head";
import NicknameEditForm from "../component/NicknameEditForm";
import FollowList from "../component/FollowingList";

const Profile = () => {
  const followingList = [
    { nickname: "재일" },
    { nickname: "오피셜" },
    { nickname: "재일짱" },
  ];

  const followerList = [
    { nickname: "재일" },
    { nickname: "오피셜" },
    { nickname: "재일짱" },
  ];

  return (
    <>
      <Head>내 프로필 | jwitter</Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
