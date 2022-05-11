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

  createReptile = (newlyCreatedReptile) => {
    console.log(newlyCreatedReptile)
  }

  updateReptile = (reptile, id) => {
    console.log("reptile:", reptile)
    console.log("id:", id)
  }
  
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reptileindex" render={(props) => < ReptileIndex reptiles={this.state.reptiles}/>}/>
          <Route path="/reptileshow/:id" render={(props) => {
              let id = props.match.params.id
              let reptile = this.state.reptiles.find(reptile => reptile.id === +id)
                return <ReptileShow reptile={reptile} />
          }} />
          <Route path="/reptilenew" render={() => {return <ReptileNew createReptile={this.createReptile} /> }} />
          <Route path="/reptileedit/:id" render={(props) => {
            let id = props.match.params.id
            let reptile = this.state.reptiles.find(reptile => reptile.id === +id)
            return <ReptileEdit updateReptile={this.updateReptile} reptile={reptile} />
          }} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
