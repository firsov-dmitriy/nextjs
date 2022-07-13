import { Box, CircularProgress, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import PostService from "../../service/PostService";
import { IPost } from "../../types/Post";

interface usersProps {
  post: IPost;
}

export default function users({ post }: usersProps) {
  console.log(post);

  return (
    <Layout>
      <Box
        sx={{ margin: "20px auto" }}
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography variant="h4" component={"div"}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" component={"div"}>
          {post.body}
        </Typography>
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  let post: IPost[] = [];
  if (typeof params?.id === "string") {
    post = await PostService.fetchOnePost(parseInt(params?.id));
  }

  return {
    props: { post },
  };
};
