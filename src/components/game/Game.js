import Chessboard from 'chessboardjsx';
import React from 'react';

import { standardStartPosition } from '../services/chess/boardSetup';

function Game(props) {
  return <Chessboard position={standardStartPosition} />;
}

export default Game;
