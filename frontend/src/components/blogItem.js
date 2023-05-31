import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
}));

const BlogItem = ({ title, author, content }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={3}>
      <CardHeader title={title} subheader={`By ${author}`} />
      <CardContent>
        <Typography variant="body1" paragraph>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogItem;
