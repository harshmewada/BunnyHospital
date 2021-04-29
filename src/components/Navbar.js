/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Toolbar, AppBar, Link, Button } from "@material-ui/core";
import useSlowDispatch from "../hooks/slowDispatch";
import { logoutUser } from "../redux/actions";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useSlowDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            component={RouterLink}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            Admin
          </Link>
          <Button onClick={handleLogOut} variant="contained">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
