import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const PageLink = ({ to, children }) => {
  // add a trailing slash if there is not one (to support SPA)
  let linkTo = to;
  if (to.substr(to.length-1) !== '/') {
    linkTo = to + '/';
  }
  const prefixedLink = prefixLink(linkTo);
  return (
    <Link to={prefixedLink}>
      {children}
    </Link>
  );
};

export default PageLink;
