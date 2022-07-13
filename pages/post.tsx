import { FC } from "react";
import PostService from "../service/PostService";
import { IPost } from "../types/Post";
import { Box, Stack } from "@mui/material";
import CardLayut from "../components/CardLayout";
import Layout from "../components/Layout";

const style = {
  box: {
    marginTop: 2,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
interface postProps {
  posts: IPost[];
}
const post: FC<postProps> = ({ posts }) => {
  return (
    <Layout>
      <Box sx={style.box}>
        {posts.map((post) => (
          <CardLayut key={post.id} post={post} />
        ))}
      </Box>
    </Layout>
  );
};

export default post;

export async function getStaticProps() {
  const posts = await PostService.fetchAllPost();
  return {
    props: { posts },
  };
}
