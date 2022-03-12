import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Top from "./RankCards/top";
import FollowUp from "./RankCards/followup";

export default function Ranking() {
  const teams = [
    {
      rank: 1,
      name: "Astralis",
      points: 919,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Astralis_Logo.png"),
    },
    {
      rank: 2,
      name: "Natus Vincere",
      points: 715,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Natus_Vincere.png"),
    },
    {
      rank: 3,
      name: "Fnatic",
      points: 650,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Fnatic_2020_infoboximage.png"),
    },
    {
      rank: 4,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 5,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 6,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 7,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 8,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 9,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 10,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 11,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 12,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 13,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 14,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 15,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 16,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 17,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 18,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 19,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 20,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 21,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 22,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 23,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 24,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 25,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 26,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 27,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
    {
      rank: 28,
      name: "Mouz",
      points: 628,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Mouz_logo.png"),
    },
    {
      rank: 29,
      name: "G2 Esports",
      points: 600,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-G2_Esports_2019.png"),
    },
    {
      rank: 30,
      name: "Team Liquid",
      points: 499,
      positionStatus: "Retained Same Spot",
      imageName: require("../assets/images/600px-Team_Liquid_2020.png"),
    },
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

      <Grid container spacing={1}>
        {teams
          .filter((team) => team.rank <= 3)
          .map((team, index) => (
            <Grid item lg={4} xs={12} key={index}>
              <Top
                key={index}
                rank={team.rank}
                name={team.name}
                points={team.points}
                positionStatus={team.positionStatus}
                imageName={team.imageName}
              />
            </Grid>
          ))}
        {teams
          .filter((team) => team.rank > 3)
          .map((team, index) => (
            <Grid item lg={4} xs={12} key={index}>
              <FollowUp
                key={index}
                rank={team.rank}
                name={team.name}
                points={team.points}
                positionStatus={team.positionStatus}
                imageName={team.imageName}
              />
            </Grid>
          ))}
      </Grid>
    </span>
  );
}
