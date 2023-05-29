import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import MarkdownEditor from './components/markdownEditor';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={MarkdownEditor} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
