
'use strict';

const express = require('express');
const app = express();
const { IamTokenManager } = require('ibm-watson/auth');

if (!process.env.SPEECH_TO_TEXT_IAM_APIKEY) {
  console.error('Missing required credentials - see https://github.com/watson-developer-cloud/node-sdk#getting-the-service-credentials');
  process.exit(1);
}

// enable rate-limiting
const RateLimit = require('express-rate-limit');
app.enable('trust proxy'); // required to work properly behind Bluemix's reverse proxy

const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to /api/*
app.use('/api/', limiter);

// force https - microphone access requires https in Chrome and possibly other browsers
// (*.mybluemix.net domains all have built-in https support)

const secure = require('express-secure-only');
app.use(secure());
app.use(express.static(__dirname + '/static'));

// set up express-browserify to serve browserify bundles for examples
const isDev = app.get('env') === 'development';
app.get(
  '/browserify-bundle.js',
  expressBrowserify('static/browserify-app.js', {
    watch: isDev,
    debug: isDev
  })
);

// set up webpack-dev-middleware to serve Webpack bundles for examples
const compiler = webpack(webpackConfig);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/' // Same as `output.publicPath` in most cases.
  })
);

const sttAuthenticator = new IamTokenManager({
  apikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY
});

const ttsAuthenticator = new IamTokenManager({
  apikey: process.env.TEXT_TO_SPEECH_IAM_APIKEY
});

// speech to text token endpoint
app.use('/api/speech-to-text/token', function(req, res) {
  return sttAuthenticator
    .requestToken()
    .then(({ result }) => {
      res.json({ accessToken: result.access_token, url: process.env.SPEECH_TO_TEXT_URL });
    })
    .catch(console.error);
});

app.use('/api/text-to-speech/token', function(req, res) {
  return ttsAuthenticator
    .requestToken()
    .then(({ result }) => {
      res.json({ accessToken: result.access_token, url: process.env.TEXT_TO_SPEECH_URL });
    })
    .catch(console.error);
});

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
app.listen(port, function() {
  console.log('Example IBM Watson Speech JS SDK client app & token server live at http://localhost:%s/', port);
});

// Chrome requires https to access the user's microphone unless it's a localhost url so
// this sets up a basic server on port 3001 using an included self-signed certificate
// note: this is not suitable for production use
// however bluemix automatically adds https support at https://<myapp>.mybluemix.net
if (!process.env.VCAP_SERVICES) {
  const fs = require('fs');
  const https = require('https');
  const HTTPS_PORT = 3001;

  const options = {
    key: fs.readFileSync(__dirname + '/keys/localhost.pem'),
    cert: fs.readFileSync(__dirname + '/keys/localhost.cert')
  };
  https.createServer(options, app).listen(HTTPS_PORT, function() {
    console.log('Secure server live at https://localhost:%s/', HTTPS_PORT);
  });
}