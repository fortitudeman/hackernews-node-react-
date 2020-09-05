import { connect } from 'react-redux';
import actions from '../../store/story/actions';
import { hasMoreStoriesSelector } from '../../store/story/selectors';
import App from './App';

const mapStateToProps = state => ({
  stories: state.story.stories,
});

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);