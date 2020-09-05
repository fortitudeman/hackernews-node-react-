import React from 'react';
import { Item, Host, OutLink, Description, CommentLink, Divider } from './styles';

const LINK_REL = 'nofollow noreferrer noopener';

const ListItem = () => {
  return (
    <>
      <tr>
        <Item>
          <span>1.</span>
        </Item>
        
        <Item>
          <OutLink href="https://gitconntected.com" rel={LINK_REL} target="_blank">
              The Developer Community <Host>(gitconnected.com)</Host>
          </OutLink>
        </Item>
      </tr>
      <tr>
        <td style={{"paddingLeft":"30px"}}></td>
        <Description>
          <span>
            9000 points by{` `}
          </span>
          <CommentLink href="#" rel={LINK_REL} target="_blank">
            Test user
          </CommentLink>{` `}
          1 Hour Ago {` | `}
          <CommentLink href="#" rel={LINK_REL} target="_blank">
            42 comments
          </CommentLink>
        </Description>
      </tr>
      <tr>
        
      </tr>
    </>
    
  )
}

export default ListItem;