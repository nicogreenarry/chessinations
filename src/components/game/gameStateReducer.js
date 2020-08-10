import { standardStartPosition } from '../../services/chess/boardSetup';

export const initialGameState = {
  position: standardStartPosition,
};

export function gameStateReducer(state, action) {
  switch (action.type) {
    default:
      throw Error(`Unrecognized action type ${action.type}`);
  }
}
