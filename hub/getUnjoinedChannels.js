const { asyncRequest } = require('../util')
const { query, validationResult } = require('express-validator/check')
const { matchedData } = require('express-validator/filter')
const { getModels } = require('../models')
const { Op } = require('sequelize')

const validator = [query('address', 'Please provide address.').exists()]

const handler = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() })
  }

  const { address } = matchedData(req)

  const { Channel } = getModels()

  // TODO MAKE THIS SCALE
  const channels = await Channel.findAll({
    where: {
      [Op.and]: [{ agentB: address.toLowerCase() }, { depositB: '0' }]
    }
  })
  res.status(200).json({ channels })
}

module.exports.validator = validator
module.exports.handler = asyncRequest.bind(null, handler)