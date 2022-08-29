import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingCard: React.FC = () => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader title={<Typography variant="h3">Loading...</Typography>} />
      <CardContent>
        <CircularProgress color="secondary" size="5em" />
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
