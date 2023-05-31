import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  makeStyles,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: 400,
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Log In
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginForm;
