import { actionTypes } from './actions';

let path = window.location.pathname
if(path.length > 0 && path.split("=") > 1) {
  var page = path.split("=")[1]
}
else var page = 0
const getInitialState = () => ({
  storyIds: [],
  stories: [],
  page: page,
  isFetching: false,
  error: '',
});

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case `${actionTypes.FETCH_STORY_IDS}_REQUEST`:
    case `${actionTypes.FETCH_STORIES}_REQUEST`:
      return {
        ...state,
        isFetching: true,
      };
    case `${actionTypes.FETCH_STORY_IDS}_SUCCESS`:
      return {
        ...state,
        ...payload,
      };
    case `${actionTypes.FETCH_STORIES}_SUCCESS`:
      return {
        ...state,
        stories: [...payload.stories],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default story;