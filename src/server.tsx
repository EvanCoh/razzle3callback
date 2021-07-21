import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = (cb : any, url : any) => {
    const context = {};
    const markup = renderToString(
        <StaticRouter context={context} location={url}>
            <App />
        </StaticRouter>
    );

    cb(null, `<!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <title>Welcome to Razzle Callback</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''} 
          ${process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`}
      </head>
      <body>
          <div id="root">${markup}</div>
      </body>
    </html>`);
}



export default server;
