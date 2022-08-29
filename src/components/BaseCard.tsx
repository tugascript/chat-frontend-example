import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

interface IProps {
  title: React.ReactNode;
  align?: "center" | "left" | "right";
  subheader?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const BaseCard: React.FC<IProps> = ({
  title,
  subheader,
  children,
  actions,
  align = "left",
}) => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader
        title={
          <Typography variant="h3" align={align}>
            {title}
          </Typography>
        }
        subheader={
          subheader && (
            <Typography variant="h6" color="grey.400">
              {subheader}
            </Typography>
          )
        }
        action={actions}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
