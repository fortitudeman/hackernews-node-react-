import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

class List extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories } = this.props;
    return (
      <>
        {stories.map(story => (
          <ListItem key={story.id} {...story} />
        ))}
      </>
    )
  }
}
export default List;