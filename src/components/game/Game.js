import Chessboard from 'chessboardjsx';
import React, { useReducer } from 'react';

import { gameStateReducer, initialGameState } from './gameStateReducer';

function Game(props) {
  const [gameState, gameDispatch] = useReducer(gameStateReducer, initialGameState);

  return <Chessboard position={gameState.position} />;
}

export default Game;
