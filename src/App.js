import React from 'react';
import './App.css';
import Game from './component/game/Game'
import Raccoons from './component/assets/images/raccoon.png';
import Bunny from './component/assets/images/bunny.png';
import Squirrel from './component/assets/images/squirrel.png';
import Hound from './component/assets/images/hound.png';
function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoons
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrel
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunny
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Hound
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
