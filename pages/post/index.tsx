import { FC } from "react";
import PostService from "../../service/PostService";
import { IPost } from "../../types/Post";
import { Box, Button } from "@mui/material";
import CardLayut from "../../components/CardLayout";
import Layout from "../../components/Layout";

const style = {
  box: {
    marginTop: 2,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: {
    margin: "20px auto",
    display: "flex",
  },
};
interface postProps {
  posts: IPost[];
}
const Index: FC<postProps> = ({ posts }) => {
  const createPost = async () => {
    await PostService.sendPost({
      id: 101,
      body: "reqwrqwq",
      title: "title",
      userId: 1,
    });
  };
  return (
    <Layout>
      <Button sx={style.btn} variant="outlined" onClick={() => createPost()}>
        Create Post
      </Button>
      <Box sx={style.box}>
        {posts.map((post) => (
          <CardLayut key={post.id} post={post} />
        ))}
      </Box>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const posts = await PostService.fetchAllPost();
  return {
    props: { posts },
  };
}
