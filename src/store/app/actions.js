import { buildActionCreator } from '../utils';

const NS = '@hackerNewsReader/app';

export const actionTypes = {
  SET_LAYOUT: `${NS}/SET_LAYOUT`,
};

const actions = {
  setLayout: buildActionCreator(actionTypes.SET_LAYOUT),
};

export default actions;