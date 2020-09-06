import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { Item, Host, OutLink, Description, CommentLink, Divider } from './styles';
import getSiteHostname from '../../store/utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from '../../store/utils/getArticleLink';
const LINK_REL = 'nofollow noreferrer noopener';
const ListItem = ({by, kids = [], score, url, title, id, type, time, items }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({url, id});
  const commentUrl = `${HN_ITEM}${id}`;

  return (
    <>
      <tr>
        <Item>
          <span>{items}.</span>
        </Item>
        
        <Item>
          <OutLink href={link} rel={LINK_REL} target="_blank">
              {title} <Host>({site})</Host>
          </OutLink>
        </Item>
      </tr>
      <tr>
        <td style={{"paddingLeft":"30px"}}></td>
        <Description>
          <span>
            {score} points by{` `}
          </span>
          <CommentLink href={`${HN_USER}${by}`} rel={LINK_REL} target="_blank">
            {by}
          </CommentLink>{` `}
          <TimeAgo date={new Date(time * 1000).toISOString()} />{` | `}
          <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
            {kids.length} comments
          </CommentLink>
        </Description>
      </tr>
      <Divider></Divider>
    </>
    
  )
}

ListItem.propTypes = {
  by: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ListItem;