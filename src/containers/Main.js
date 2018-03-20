import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home/Home';
import NewGame from '../components/new-game/NewGame';
import Game from '../components/game/Game';

class Main extends Component {
	render(){
		return(
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/new-game' component={NewGame}/>
				<Route exact path='/game/:id' component={Game}/>
			</Switch>)
	}
}

export default Main;
