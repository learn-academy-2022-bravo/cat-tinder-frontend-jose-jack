import React, { Component } from 'react';
import reptiles from './mockReptiles';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import ReptileIndex from './pages/ReptileIndex';
import ReptileEdit from './pages/ReptileEdit';
import ReptileNew from './pages/ReptileNew';
import ReptileShow from './pages/ReptileShow';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      reptiles: reptiles
    }
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reptileindex" component={ReptileIndex} />
          <Route path="/reptileshow" component={ReptileShow} />
          <Route path="/reptilenew" component={ReptileNew} />
          <Route path="/reptileedit" component={ReptileEdit} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
