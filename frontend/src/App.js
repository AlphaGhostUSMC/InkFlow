import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import MarkdownEditor from './components/markdownEditor';
import RegistrationForm from './components/registrationForm';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={MarkdownEditor} />
          <Route exact path="/registration-form" component={RegistrationForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
