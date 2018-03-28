const test = require('./test')
const updateState = require('./updateState')
const getState = require('./getState')
const getChannels = require('./getChannels')

module.exports = app => {
  app.route('/test').get(test.handler)
  // app
  //   .route('/latestState')
  //   // .post('updateState.validator')
  //   // .post('updateState.handler')
  // app
  //   .route('/latestState')
  //   .get('getState.validator')
  //   .get('getState.handler')
  app
    .route('/getChannels')
    .get(getChannels.validator)
    .get(getChannels.handler)
}