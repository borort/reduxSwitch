import * as types from '../constants/switchActionTypes';

const initialState = {
  status: '-'
}

export default function (state = initialState, actions) {
  switch (actions.type) {
    case types.SWITCH_ON:
      return {
        ...state,
        status: 'ON'
      };
    case types.SWITCH_OFF:
      return {
        ...state,
        status: 'OFF'
      }
    default:
      return state;
  }
}
