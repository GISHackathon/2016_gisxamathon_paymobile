import {combineReducers} from 'redux';

const config = {
  reloading: false,
  uploading: false,
  dashboard: {
    prepare:[],
    checkin:[],
    distribute:[],
    done:[]
  }
}

export default (state, action) => {
  if (Object.getOwnPropertyNames(state).length === 0) {
    return config;
  }

  switch (action.type) {
    case 'setLoading':
      return Object.assign({}, state, {
        reloading: action.loading
      })
    case 'setUploading':
      return Object.assign({}, state, {
        uploading: action.uploading
      })
    case 'setData':
      return Object.assign({}, state, {
        dashboard: action.data
      });
    default:
      return state;
  }
}
