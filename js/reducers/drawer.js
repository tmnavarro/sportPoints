
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

const initialState = {
  drawerState: 'closed',
  drawerDisabled: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case OPEN_DRAWER:
    return {
      ...state,
      drawerState: 'opened',
    };
  case CLOSE_DRAWER:
    return {
      ...state,
      drawerState: 'closed',
    };
  case 'DISABLE_DRAWER':
    return {
      ...state,
      drawerDisabled: true,
      drawerState: 'closed',
    };
  case 'ACTIVE_DRAWER':
    return {
      ...state,
      drawerDisabled: false,
    };
  default:
    return state;

  }
}
