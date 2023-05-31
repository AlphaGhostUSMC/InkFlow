import React from 'react';
import { Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: 'auto',
  },
  link: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} InkFlow. All rights reserved.
        <Link href="#" className={classes.link}>
          Terms of Service
        </Link>
        <Link href="#" className={classes.link}>
          Privacy Policy
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
