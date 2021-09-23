import { combineReducers } from 'redux';
import product_list from './product_list'
import cartDetails from './cartDetail';

export default combineReducers({
  product_list,
  cartDetails,
});