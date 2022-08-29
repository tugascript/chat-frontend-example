import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RegisterForm from "./RegisterForm";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LoginForm from "./LoginForm";
import Hidden from "@mui/material/Hidden";

const HomeCard: React.FC = () => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardContent>
        <Typography
          paragraph
          variant="h3"
          align="center"
          sx={{ marginBottom: "0.5em" }}
        >
          Welcome to Ephemeral Chats!
        </Typography>
        <Hidden mdDown>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Typography
                paragraph
                variant="h4"
                align="center"
                color="primary.contrastText"
              >
                Create Account
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography
                paragraph
                variant="h4"
                align="center"
                color="primary.contrastText"
              >
                Login
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6} xs={12}>
            <Hidden mdUp>
              <Typography
                variant="h4"
                align="center"
                color="primary.contrastText"
              >
                Create Account
              </Typography>
            </Hidden>
            <RegisterForm />
          </Grid>
          <Grid item md={6} xs={12}>
            <Hidden mdUp>
              <Typography
                variant="h4"
                align="center"
                color="primary.contrastText"
              >
                Login
              </Typography>
            </Hidden>
            <LoginForm />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
