import { actionTypes } from './actions';
import { layouts } from './utils';

const getInitialState = () => ({
  layout: layouts.list,
});

const app = (state = getInitialState(), { type, payload }) => {
  console.log('payload: ', payload);
  switch (type) {
    case actionTypes.SET_LAYOUT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default app;