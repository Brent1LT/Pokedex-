
const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    //action thunk creator
    return action(dispatch, getState);
  }
    //action POJO
  return next(action);
}

export default thunk;