import React, { Component } from 'react'
import { Form, Seperator } from './style';

export default class Footer extends Component {
  render() {
    return (
      <tr className="footer">
        <td>
          <Seperator>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
          </Seperator> 
          <br />
          <center>
            <a href="#apply">
              Applications are open for YC Winter 2021
            </a>
          </center>
          <br />
          <center>
            <span className='yclinks'>
              <a href="#newsguidelines.html">
                  Guidelines
              </a>|
              <a href="#newsfaq.html">
                  FAQ
              </a>|
              <a href="#mailto:hn@ycombinator.com">
                  Support
              </a>|
              <a href="https://github.com/HackerNews/API">
                  API
              </a>|
              <a href="#security.html">
                  Security
              </a>|
              <a href="#lists">
                  Lists
              </a>|
              <a href="#bookmarklet.html">
                  Bookmarklet
              </a>|
              <a href="#legal">
                  Legal
              </a>|
              <a href="#apply">
                  Apply to YC
              </a>|
              <a href="#mailto:hn@ycombinator.com">
                  Contact
              </a>
            </span>
            <br />
            <br />
            <Form method="get" action="//hn.algolia.com">
                Search:
                <input type="text" name="q" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoComplete="false"></input>
            </Form>
          </center>
        </td>
      </tr>
    )
  }
}
