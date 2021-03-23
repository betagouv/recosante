import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link
          type='application/opensearchdescription+xml'
          rel='search'
          href='opensearch.xml'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var isProduction = window.location.href.indexOf("recosante.beta.gouv.fr") !== -1;
            (function (l, u, m, i, E, r, e, s) {
              l[m] = function () {
                (l[m].q = l[m].q || []).push(arguments);
              };
              var c = u.createElement("script"),
                h = u.getElementsByTagName("head")[0];
              c.type = "text/javascript";
              c.async = true;
              c.crossorigin = true;
              c.src = "https://lumiere.cleverapps.io/lib.js?a=" + i + "&n=" + E + "&e=" + r + "&d=" + e + "&b=" + s + "&t=" + Date.now();
              h.appendChild(c);
            })(window, document, "lumiere", isProduction ? "app_z_8CdZLKpTtXQR6RcvgVC" : "none", "default", isProduction, !isProduction, !isProduction);`,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
