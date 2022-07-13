import { useEffect, useState } from "react";
import { fetchAllUsers } from "../service/UserService";
import { IUser } from "../types/User";
import Navbar from "./_Navbar";
import { Box } from "@mui/material";
import CardLayut from "./_card";

const user = () => {
  const [users, setUser] = useState<IUser[]>([]);
  useEffect(() => {
    fetchAllUsers().then((users) => setUser(users));
  }, []);
  const style = {
    box: {
      marginTop: 2,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  };
  return (
    <>
      <Navbar />
      <Box sx={style.box}>
        {users.map((user) => (
          <CardLayut key={user.id} user={user} />
        ))}
      </Box>
    </>
  );
};

export default user;
