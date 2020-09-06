import styled from 'styled-components';

export const Item = styled.td`
  vertical-align: top;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: #828282;
  span{
    color: #828282;
  }
`
export const Host = styled.span`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 8pt;
  color: #828282;
`
export const Divider = styled.tr`
  height:5px;
`
export const OutLink = styled.a`
  a:link, a:visited{
    color:#828282;
    text-decoration: none;
  }
`
export const Description = styled.td`
  font-size: 7pt;
  span {
    color: #828282;
  }
`
export const CommentLink = styled.a`
  color: #828282 !important;
`