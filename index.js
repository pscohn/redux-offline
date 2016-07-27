import State from './State';

export State;

export const offline = store => next => action => {
  const state = store.getState();
  if (action.type === 'SAVE_STATE') {
    const state = JSON.stringify(state);
    const url = 'data:text/json;charset=utf8,' + encodeURIComponent(state);
    window.open(url, '_blank');
    window.focus();
  }
}

export function makeHydratable(reducer, hydrateType) {
  return function (state, action) {
    switch (action.type) {
    case hydrateType:
      return reducer(action.payload.state, action);
    default:
      return reducer(state, action);
    }
  }
}
