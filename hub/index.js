const test = require('./test')
const getStateUpdates = require('./getStateUpdates')
const getChannelByAddresses = require('./getChannelByAddresses')
const getChannelById = require('./getChannelById')
const getTransactionById = require('./getTransactionById')
const getTransactionByChannelNonce = require('./getTransactionByChannelNonce')
const getLatestStateUpdate = require('./getLatestStateUpdate')
const getChannels = require('./getChannels')
const getUserByAddress = require('./getUserByAddress')
const getUserByName = require('./getUserbyName')
const updatePhone = require('./updatePhone')
const updateState = require('./updateState')
const updateName = require('./updateName')
const verifyStateUpdate = require('./verifyStateUpdate')
const updateChannelStatus = require('./updateChannelStatus')

module.exports = app => {
  // testing
  app.route('/test').get(test.handler)

  // user
  app
    .route('/user/address/:address')
    .get(getUserByAddress.validator)
    .get(getUserByAddress.handler)
  app
    .route('/user/name/:name')
    .get(getUserByName.validator)
    .get(getUserByName.handler)
  app.route('/phone').post(updatePhone.validator).post(updatePhone.handler)
  app.route('/name').post(updateName.validator).post(updateName.handler)

  // state updates
  app
    .route('/channel/id/:id/state')
    .get(getStateUpdates.validator)
    .get(getStateUpdates.handler)
  app
    .route('/channel/id/:id/state')
    .post(updateState.validator)
    .post(updateState.handler)
  app
    .route('/channel/id/:id/state/verify')
    .post(verifyStateUpdate.validator)
    .post(verifyStateUpdate.handler)

  // channel
  app
    .route('/channel/a/:agentA/b/:agentB')
    .get(getChannelByAddresses.validator)
    .get(getChannelByAddresses.handler)
  app
    .route('/channel/id/:id')
    .get(getChannelById.validator)
    .get(getChannelById.handler)
  app.route('/channel').get(getChannels.validator).get(getChannels.handler)
  app
    .route('/channel/id/:id/latest')
    .get(getLatestStateUpdate.validator)
    .get(getLatestStateUpdate.handler)
  app
    .route('/channel/id/:id/update')
    .post(updateChannelStatus.validator)
    .post(updateChannelStatus.handler)

  // transaction
  app
    .route('/transaction/:id')
    .get(getTransactionById.validator)
    .get(getTransactionById.handler)
  app
    .route('/transaction')
    .get(getTransactionByChannelNonce.validator)
    .get(getTransactionByChannelNonce.handler)
}
