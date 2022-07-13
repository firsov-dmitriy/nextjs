import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IUser } from "../types/User";
import { FC } from "react";
import { IPost } from "../types/Post";
import { useRouter } from "next/router";

interface CardProps {
  user?: IUser;
  post?: IPost;
}

const CardLayut: FC<CardProps> = ({ user, post }) => {
  const router = useRouter();
  return (
    <Box sx={{ width: user ? "32%" : "45%", margin: 1 }}>
      <Card
        variant="outlined"
        onClick={() => post && router.push(`/post/${post?.id}`)}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user && `ID: ${user?.id}`}
            {post && `ID: ${post?.id}`}
          </Typography>

          <Typography variant="h5" component="div">
            {user && `Name: ${user?.name}`}
            {post && `Title: ${post?.title}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user && `UserName: ${user?.username}`}
            {post && `Body: ${post?.body}`}
          </Typography>
          {user && (
            <Typography variant="body2">Email: {user?.email}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardLayut;
