import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  TextField,
  Typography,
  Button,
  Grid,
  Paper,
  makeStyles,
  Container,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  textarea: {
    width: '100%',
  },
  convertButton: {
    marginTop: theme.spacing(2),
  },
  markdownPreview: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
  },
}));

const MarkdownEditor = () => {
  const classes = useStyles();
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" gutterBottom>
              Markdown Editor
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textarea}
              multiline
              minRows={10}
              maxRows={20}
              value={markdown}
              onChange={handleInputChange}
              label="Enter Markdown"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.convertButton}
              variant="contained"
              color="primary"
              fullWidth
            >
              Convert
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.markdownPreview} elevation={0}>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MarkdownEditor;
