import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import slugify from "slugify";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: props.to ?? slugify(this.props.children.toLowerCase()),
    };
  }

  render() {
    return (
        <li><div class="num">{this.props.number}</div><Link to={this.state.to}>{this.props.children.toUpperCase()}</Link></li>
    );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/all-channels" component={AllChannels} />
        <Route exact path='*' component={DeadLink} />
      </Switch>
    </BrowserRouter>
  );
}

function MainMenu() {
    return (
        <section className="menulisting" id="main">
            <MenuItem number="1">All Channels</MenuItem>
            <MenuItem number="2">Entertainment</MenuItem>
            <MenuItem number="3">Lifestyle & Culture</MenuItem>
            <MenuItem number="4">Movies</MenuItem>
            <MenuItem number="5">Sports</MenuItem>
            <MenuItem number="6">News</MenuItem>
            <MenuItem number="7">Documentaries</MenuItem>
            <MenuItem number="8">Kids</MenuItem>
            <MenuItem number="9">Music</MenuItem>
            <MenuItem number="0">More...</MenuItem>
        </section>
    )
}

function AllChannels() {
    return (
        <section className="menulisting" id="main">
            <MenuItem number="1" to={"/"}>This means it works</MenuItem>
        </section>
    )
}

function DeadLink() {
    return (
        <div>This page doesn't exist. <Link to={'/'}>go back</Link></div>
    )
}
export default App;
