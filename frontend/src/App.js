import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs/:id" component={BlogDetail} />
          <Route exact path="/create-blog" component={CreateBlog} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
