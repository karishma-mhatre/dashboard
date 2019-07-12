import React from 'react';
import './styles/common.scss';
import Dashboard from './Components/Dasboard';
import { HashRouter as Router, Route } from "react-router-dom";
import Registration from './Components/Registration';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isRegistered: false
    }
  }

  register = () => {
    this.setState({isRegistered: true})
    window.location.hash = "/dashboard"
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/dashboard" render={(props) => (
            <Dashboard {...props} {...this.state.isRegistered}></Dashboard>)}></Route>
          <Route exact path="/" render={(props) => (
            <Registration {...props} {...this.state.isRegistered} register={this.register}></Registration>)}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
