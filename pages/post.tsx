import { useEffect, useState } from "react";
import PostService from "../service/PostService";
import { IPost } from "../types/Post";
import Navbar from "./_Navbar";
import { Box, Stack } from "@mui/material";
import CardLayut from "./_card";

const style = {
  box: {
    marginTop: 2,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
const post = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    PostService.fetchAllPost().then((posts) => setPosts(posts));
  }, []);
  return (
    <>
      <Navbar />
      <Box sx={style.box}>
        {posts.map((post) => (
          <CardLayut post={post} />
        ))}
      </Box>
    </>
  );
};

export default post;
