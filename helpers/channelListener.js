const { getChannelManager, getWeb3 } = require('../web3')
const { getModels } = require('../models')
const Ethcalate = require('../../ethcalate-client/src')

async function processChannelOpen (
  { channelId, agentB, tokenContract, depositA },
  ethcalate,
  defaultAccount
) {
  if (agentB === defaultAccount) {
    console.log(
      'Found a channel opened with Ingrid, Ingrid will automatically join'
    )
    if (!tokenContract || parseInt(tokenContract) === 0) {
      try {
        await ethcalate.joinChannel({
          channelId,
          tokenContract: null,
          depositInWei: depositA
        })
        console.log(`Joined channel ${channelId} as Ingrid`)
      } catch (e) {
        console.error(e)
      }
    }
  }
}

module.exports = async contractAddress => {
  const web3 = getWeb3()
  const channelManager = getChannelManager()
  const ethcalate = new Ethcalate(
    web3,
    contractAddress,
    'http://localhost:3000'
  )
  await ethcalate.initContract()

  channelManager.events.allEvents(async (err, event) => {
    if (err) {
      console.log(err)
      return
    }
    const channelAttributes = {
      ...event.returnValues
    }
    switch (event.event) {
      case 'ChannelOpen':
        console.log('caught ChannelOpen', channelAttributes)
        await processChannelOpen(
          channelAttributes,
          ethcalate,
          web3.eth.defaultAccount
        )
        break
    }
  })
}