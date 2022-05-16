import React, { Component } from 'react';
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
      reptiles: []
    }
  }

componentDidMount(){
  this.readReptile()
}

readReptile = () => {
  fetch("http://localhost:3000/reptiles")
  .then(response => response.json())
  .then(reptilesArray => this.setState({reptiles: reptilesArray}))
  .catch(errors => console.log("Reptile read errors:", errors))
}

createReptile = (newlyCreatedReptile) => {
    fetch("http://localhost:3000/reptiles", {
      body: JSON.stringify(newlyCreatedReptile),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readReptile())
    .catch(errors => console.log("Reptile create errors:", errors))
  }

  updateReptile = (reptile, id) => {
      fetch(`http://localhost:3000/reptiles/${id}`, {
        body: JSON.stringify(reptile),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(() => this.readReptile())
      .catch(errors => console.log("Reptile update errors:", errors))
    }

    deleteReptlile = (id) => {
      fetch(`http://localhost:3000/reptiles/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then(() => this.readReptile())
      .catch(errors => console.log("delete errors:", errors))
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
              return <ReptileShow deleteReptile={this.deleteReptlile} reptile={reptile} />
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
