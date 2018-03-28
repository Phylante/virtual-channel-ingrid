const { asyncRequest } = require('../util')
const { param, validationResult } = require('express-validator/check')
const { matchedData } = require('express-validator/filter')
const { getModels } = require('../models')

const validator = [
  param('vaultAddress', 'Please provide vault address.').exists()
]

const handler = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() })
  }

  const { address, channelID } = matchedData(req) 



  const vault = await Vault.at(vaultAddress)
  const balance = await vault.getBalance.call(0x0)
  return res.status(200).json({ balance: balance.toString() })
}

module.exports.validator = validator
module.exports.handler = asyncRequest.bind(null, handler)
