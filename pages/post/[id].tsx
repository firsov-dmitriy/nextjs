import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import PostService from "../../service/PostService";
import { IPost } from "../../types/Post";

interface usersProps {
  post: IPost;
}

export default function users() {
  const [post, setPost] = useState<IPost>();
  const { query } = useRouter();
  useEffect(() => {
    if (typeof query.id === "string") {
      console.log(query.id);

      PostService.fetchOnePost(parseInt(query.id)).then((post) =>
        setPost(post)
      );
    }
  }, []);
  console.log(post);

  return <Layout>Some</Layout>;
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { ... } }
//     ],
//     fallback: true // false or 'blocking'
//   };
// }
