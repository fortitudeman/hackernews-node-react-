import React, { Component } from 'react';
import Title from '../Title/title'
import { Table } from './styles';
class App extends Component {
  render() {
    return (
      <center>
        <Table>
          <tbody>
            <Title />
          </tbody>
        </Table>
      </center>
    )
  }
}
export default App;
