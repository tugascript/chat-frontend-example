import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Typography from "@mui/material/Typography";
import React from "react";
import BaseCard from "../../components/BaseCard";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const HomeCard: React.FC = () => {
  return (
    <BaseCard title="Welcome to Ephemeral Chats!" align="center">
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
    </BaseCard>
  );
};

export default HomeCard;
