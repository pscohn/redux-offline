export function makeHydratable(reducer, hydrateActionType) {
  return function (state, action) {
    switch (action.type) {
    case hydrateActionType:
      return reducer(action.payload.state, action);
    default:
      return reducer(state, action);
    }
  }
}