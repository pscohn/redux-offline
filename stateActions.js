import thunk from 'redux-thunk';

function action(type, payload) {
  return {
    type,
    payload,
  }
}

export function onSaveState() {
  return (dispatch, getState) => {
    const state = JSON.stringify(getState());
    const url = 'data:text/json;charset=utf8,' + encodeURIComponent(state);
    window.open(url, '_blank');
    window.focus();
  }
}

export function onLoadState(state) {
  return action('HYDRATE_STATE', { state });
}
