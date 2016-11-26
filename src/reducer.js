import {combineReducers} from 'redux';

const config = {
  products:[]
}

export default (state, action) => {
  if (Object.getOwnPropertyNames(state).length === 0) {
    return config;
  }

  switch (action.type) {
    case 'setProducts':
      return Object.assign({}, state, {
        products: action.products
      })
    default:
      return state;
  }
}
