import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IUser } from "../types/User";
import { FC } from "react";

interface CardProps {
  user: IUser;
}

const CardUser: FC<CardProps> = ({ user: { name, username, id, email } }) => {
  return (
    <Box sx={{ width: "32%", margin: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {name}
          </Typography>
          <Typography variant="h5" component="div">
            UserName: {username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email: {email}
          </Typography>
          <Typography variant="body2">ID: {id}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardUser;
