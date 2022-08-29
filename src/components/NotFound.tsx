import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader title="404" />
      <CardContent>
        <Typography paragraph variant="h3" align="center">
          Page Not Found
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotFound;
