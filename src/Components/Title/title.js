import React, { Component } from 'react'
import logo from '../../images/favicon.png'
import './styles.css';

class Title extends Component {
  render() {
    return (
      <tr>
        <td className="td">
          <table className="header">
            <tbody>
              <tr>
                <td className="image">
                  <a href="/">
                    <img src={logo} />
                  </a>
                </td>
                <td className="headerTd">
                  <span className="pagetop">
                    <b className="hname">
                      <a href="#news">Hacker News</a>
                    </b>
                    <span className="topsel">
                      <a href="#new">new</a> |
                    </span>
                    <a href="#front">past</a> |
                    <a href="#newcomments">comments</a> |
                    <a href="#ask">ask</a> |
                    <a href="#show">show</a> |
                    <a href="#jobs">jobs</a>
                    <a href="#submit">submit</a>
                  </span>
                </td>
                <td className="login">
                  <span className="pagetop">
                    <a href="#login">login</a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    )
  }
}
export default Title;