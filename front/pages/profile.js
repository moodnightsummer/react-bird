import AppLayout from "../component/AppLayout";
import React from "react";
import Head from "next/head";
import NicknameEditForm from "../component/NicknameEditForm";
import FollowList from "../component/FollowingList";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>내 프로필 | jwitter</Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
