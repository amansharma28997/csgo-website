import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default class Top extends Component {
  render() {
    const { rank, name, points, positionStatus, imageName } = this.props;
    return (
      <Card
        sx={{
          display: "flex",
          maxWidth: "100%",
          //   minWidth: "25rem",
          padding: "5px",
          height: "20vh",
          minHeight: "150px",
          cursor: "pointer",
        }}
        elevation={2}
        // variant="outlined"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 1,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="div"
              variant="h6"
              color="text.disabled"
              style={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              {name}
            </Typography>
            <span>
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                style={{ fontWeight: "900" }}
              >
                {points} Points
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                component="div"
                style={{ fontWeight: "900" }}
              >
                - {positionStatus}
              </Typography>
            </span>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 1 / 3, mt: 2, mb: 2, objectFit: "contain" }}
          image={imageName}
          alt="Astralis"
        />
        <Typography
          variant="h1"
          color="text.secondary"
          sx={{ width: 1 / 3 }}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            fontWeight: 500,
            paddingLeft: "1rem",
          }}
        >
          {rank}
        </Typography>
      </Card>
    );
  }
}
