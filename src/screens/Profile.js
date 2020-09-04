import React from "react";
import { MenuContainer } from "../components";
import UserList from "../components/user-list/UserList"
import { GetMessageList } from "../components";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>

    <UserList />

    <GetMessageList />

  </>
);
