import { FC, useEffect, useState } from "react";
import { fetchAllUsers } from "../service/UserService";
import { IUser } from "../types/User";
import { Box } from "@mui/material";
import CardLayut from "../components/CardLayout";
import Layout from "../components/Layout";

interface userProps {
  users: IUser[];
}

const user: FC<userProps> = ({ users }) => {
  const style = {
    box: {
      marginTop: 2,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  };

  return (
    <Layout>
      <Box sx={style.box}>
        {users.map((user) => (
          <CardLayut key={user.id} user={user} />
        ))}
      </Box>
    </Layout>
  );
};

export default user;

export async function getStaticProps() {
  const users = await fetchAllUsers();
  return {
    props: { users },
  };
}
