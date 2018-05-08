import { combineReducers } from 'redux';
import menu_principal_reducer from './menu_principal_reducer'
import interiores_reducer from './interiores_reducer'

const rootReducer = combineReducers({
  menu_principal_reducer,
  interiores_reducer
});

export default rootReducer;



