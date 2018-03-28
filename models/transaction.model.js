module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'transactions',
    {
      channelID: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      r: {
        type: DataTypes.STRING,
        allowNull: false
      },
      s: {
        type: DataTypes.STRING,
        allowNull: false
      },
      balance1: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      balance2: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      nonce: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currentState: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'transactions',
      timestamps: true
    }
  )
}