import React, { Component } from 'react';

import './Game.css';
import '../../styles/Main.css';

class Game extends Component {
  
  renderCell(cell, index){
  	return (
  		<div className="cell" key={index}>
  			<div className="id">
  				{cell.priority+1}
  			</div>
  			<div className="balls">

  			</div>
  			<div className="score">
  				{cell.score}
  			</div>
  		</div>
  		)
  }
  render() {
  	var user_id = 1;
  	var Users = [
  		{id: 1, name: 'ak'},
  		{id: 2, name: 'nur'},
  	]
    var game = {
    	id: 7,
    	is_finished: false,
    	timestamp_start: 15245887456,
    	timestamp_end: null,
    	player1: {
    		id: 1,
    		score: 0,
    		cells: [
    			{priority: 0, score: 9},
    			{priority: 1, score: 9},
    			{priority: 2, score: 9},
    			{priority: 3, score: 9},
    			{priority: 4, score: 9},
    			{priority: 5, score: 9},
    			{priority: 6, score: 9},
    			{priority: 7, score: 9},
    			{priority: 8, score: 9},
    		],
    	},
    	player2: {
    		id: 2,
    		score: 0,
    		cells: [
    			{priority: 0, score: 9},
    			{priority: 1, score: 9},
    			{priority: 2, score: 9},
    			{priority: 3, score: 9},
    			{priority: 4, score: 9},
    			{priority: 5, score: 9},
    			{priority: 6, score: 9},
    			{priority: 7, score: 9},
    			{priority: 8, score: 9},
    		],
    	}
    };
    var ownStatus = game.player1;
    var opponentStatus = game.player2;
    if(game.player2.id === user_id){
    	ownStatus = game.player2;
    	opponentStatus = game.player1; 
    }
    return (
      <div className="full-width flex flex-center">
        <div className="board">
        	<div className="opponent-side">
        		<div className="cells">
	        		{opponentStatus.cells.map((cell, index)=>{
	        			return this.renderCell(cell, index);
	        		})}
        		</div>
        		<div className="overall-score">
        			<div className="center-score">{opponentStatus.score}</div>
        			<div className="center-balls"></div>
        		</div>
        	</div>
        	<div className="own-side">
        		<div className="cells">
	        		{ownStatus.cells.map((cell, index)=>{
	        			return this.renderCell(cell, index);
	        		})}
        		</div>
        		<div className="overall-score">
        			<div className="center-score">{opponentStatus.score}</div>
        			<div className="center-balls"></div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Game;
