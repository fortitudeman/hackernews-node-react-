import React, { Component } from 'react';
import Title from '../Title/title';
import Content from '../Content/content';
import Footer from '../Footer/footer';
import { Table, Space } from './styles';
class App extends Component {
  render() {
    return (
      <center>
        <Table>
          <tbody>
            <Title />
            <Space />
            <Content />
            <Footer />
          </tbody>
        </Table>
      </center>
    )
  }
}
export default App;
