import Chess from 'chess.js';
import Chessboard from 'chessboardjsx';
import React, { useEffect, useState } from 'react';

export default function Game2() {
  const [fen, setFen] = useState('start');
  // square with the currently clicked piece
  const [pieceSquare, setPieceSquare] = useState('');
  // array of past game moves
  const [game, setGame] = useState();

  useEffect(() => setGame(new Chess()), []);

  function onDrop({ sourceSquare, targetSquare }) {
    // see if the move is legal
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    setFen(game.fen());
  }

  function onSquareClick(square) {
    setPieceSquare(square);

    const move = game.move({
      from: pieceSquare,
      to: square,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    setFen(game.fen());
    setPieceSquare('');
  }

  return <Chessboard position={fen} onDrop={onDrop} onSquareClick={onSquareClick} />;
}
