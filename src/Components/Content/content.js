import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContentWrapper} from './styles';
import List from '../List';

class Content extends Component {
  
  static propTypes = {
    stories: PropTypes.array.isRequired,
    fetchStoriesFirstPage: PropTypes.func.isRequired,
  }
  render() {
    const { stories } = this.props;
    return (
      <tr>
        <td>
          <ContentWrapper>
            <tbody>
              <List stories={stories} />
            </tbody>
          </ContentWrapper>
        </td>
      </tr>
    )
  }
}
export default Content;