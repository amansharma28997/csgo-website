import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Top from "./RankCards/top";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  topStyles: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

export default function Ranking() {
  const classes = useStyles();

  const teams = [
    { rank: 1, name: "Astralis", points: 919 },
    { rank: 2, name: "Natus Vincere", points: 715 },
    { rank: 3, name: "Fnatic", points: 650 },
    { rank: 4, name: "Mouz", points: 628 },
    { rank: 5, name: "G2 Esports", points: 600 },
    { rank: 6, name: "Liquid", points: 499 },
  ];
  return (
    <span
      style={{
        minHeight: "calc(100vh - 110px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginLeft: "5vw",
        marginRight: "5vw",
      }}
    >
      <Typography
        component="div"
        variant="h5"
        color="text.secondary"
        sx={{ pt: "20px", pb: "20px" }}
        style={{
          fontWeight: "400",
        }}
      >
        World Rankings
      </Typography>

      {/* <li key={team.id}>{team.name}</li> */}
      <Grid
        container
        spacing={1}
        // className={classes.topStyles}
      >
        {teams.map((team, index) => (
          <Grid item lg={4} xs={12}>
            <Top
              rank={team.rank}
              name={team.name}
              points={team.points}
              key={index}
            />
          </Grid>
        ))}
      </Grid>

      {/* // <Grid container>
        //   <Card
            sx={{
              display: "flex",
              maxWidth: "25rem",
              minWidth: "25rem",
              padding: "5px",
              // display: "inherit",
            }}
            elevation={0}
          >
            <Box sx={{ display: "flex", flexDirection: "column", width: 1 }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {team.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  component="div"
                >
                  {team.points} Points
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  - Retained Same Spot
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 1 / 3 }}
              image="https://reactjs.org/logo-og.png"
              // style={{ padding: "1rem" }}
              alt="Astralis"
            />
            <Typography
              variant="h1"
              color="text.secondary"
              sx={{ width: 1 / 3 }}
              style={{
                display: "flex",
                alignteams: "center",
                justifyContent: "space-around",
                fontWeight: 500,
                paddingLeft: "1rem",
              }}
            >
              {team.id}
            </Typography>
          </Card>
        </Grid>
        <Card
          sx={{
            display: "flex",
            maxWidth: "25rem",
            minWidth: "25rem",
            padding: "5px",
          }}
          elevation={0}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: 1 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {team.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                component="div"
              >
                {team.points} Points
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                - Retained Same Spot
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 1 / 3 }}
            image="https://reactjs.org/logo-og.png"
            // style={{ padding: "1rem" }}
            alt="Astralis"
          />
          <Typography
            variant="h1"
            color="text.secondary"
            sx={{ width: 1 / 3 }}
            style={{
              display: "flex",
              alignteams: "center",
              justifyContent: "space-around",
              fontWeight: 500,
              paddingLeft: "1rem",
            }}
          >
            {team.id}
          </Typography>
        </Card>
      
      <Grid container spacing={4} className={classes.topStyles}>
        <Grid item lg={4} xs={12}>
          <Top />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Top />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Top />
        </Grid>
      </Grid> */}
    </span>
  );
}
