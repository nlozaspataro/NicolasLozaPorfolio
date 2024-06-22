import { Button, Grid, Typography } from "@mui/material";

export const Header = () => {
  const pages = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Grid item xs={12}>
      <Grid container p={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8} display={"flex"} justifyContent={"flex-end"}>
          {pages.map((page) => {
            return (
              <Button
                disableRipple
                key={page.id}
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                  "&:active": {
                    backgroundColor: "transparent",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  backgroundColor: "transparent",
                  textTransform: "none",
                }}
              >
                <Typography color={"white"}>{page.name}</Typography>
              </Button>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
