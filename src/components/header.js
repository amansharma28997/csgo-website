import {
  // styled,
  // alpha,
  // InputBase,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YourLogo from "../assets/images/csgo-logo.svg";

// import SearchIcon from "@mui/icons-material/Search";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "30ch",
//       "&:focus": {
//         width: "35ch",
//       },
//     },
//   },
// }));

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ESports Portal
          </Typography>
        </Stack>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, minHeight: "4vh", minWidth: "5vw" }}
        >
          {/* <MenuIcon /> */}
          {/* <NewIcon /> */}
          <Icon>
            <img src={YourLogo} height={30} width={30} />
          </Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
