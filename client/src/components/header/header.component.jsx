import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './header.styles';

const Header = () => {
  const classes = useStyles();

  return (
    <Typography variant="h4" align="center" className={classes.container}>
      BLOG
    </Typography>
  );
};

export default Header;