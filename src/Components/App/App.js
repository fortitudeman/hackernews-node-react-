import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/title';
import Content from '../Content/content';
import Footer from '../Footer/footer';
import { Table, Space } from './styles';

class App extends Component {
  static defaultProps = {
    stories: [],
  };

  static propTypes = {
    stories: PropTypes.array.isRequired,
    fetchStoriesFirstPage: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,
    storyIds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasMoreStores: PropTypes.bool.isRequired,
    fetchStories: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };
  render() {
    const { stories } = this.props;
    return (
      <center>
        <Table>
          <tbody>
            <Title />
            <Space />
            <Content stories={stories}/>
            <Footer />
          </tbody>
        </Table>
      </center>
    )
  }
}
export default App;
