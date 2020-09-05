import React from 'react';
import { Item, Title, Host, OutLink, Description, CommentLink } from './styles';

const LINK_REL = 'nofollow noreferrer noopener';

const ListItem = () => {
  return (
    <Item>
      <OutLink href="https://gitconntected.com" rel={LINK_REL} target="_blank">
        <Title>
          The Developer Community <Host>(gitconnected.com)</Host>
        </Title>
      </OutLink>
      <Description>
        9000 points by{` `}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          Test user
        </CommentLink>{` `}
        1 Hour Ago {` | `}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          42 comments
        </CommentLink>
      </Description>
    </Item>
  )
}

export default ListItem;