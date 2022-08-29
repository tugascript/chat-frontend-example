import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React from "react";

const ErrorCard: React.FC = () => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader title={<Typography variant="h3">Error</Typography>} />
      <CardContent>
        <Typography>Something went wrong</Typography>
      </CardContent>
    </Card>
  );
};

export default ErrorCard;
