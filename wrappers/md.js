import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const page = this.props.route.page.data;
    const description = page.description || "";
    const keywords = page.keywords || "";
    const meta = [
      {"name": "description", "content": description},
      {"name": "keywords", "content": keywords },
    ];
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${page.title}`}
          meta={meta}
        />
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    )
  },
})
