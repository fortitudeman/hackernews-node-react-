import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../../store/story/actions';
import { hasMoreStoriesSelector } from '../../store/story/selectors';

import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import { MoreSpace, Next } from './styles';
class List extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories, page } = this.props;
    return (
      <>
        {stories.map((story,key) => (
          <ListItem key={story.id} {...story} items = {Number(page) * 30 + Number(key) + 1}/>
        ))}
        <MoreSpace />
        <tr>
          <td>
            <Next href={`/page=${Number(page)+1}`} rel="next" >More</Next>
          </td>
        </tr>
      </>
    )
  }
}
const mapStateToProps = state => ({
  fetchStoriesFirstPage: PropTypes.func.isRequired,
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStores: hasMoreStoriesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page })),
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);