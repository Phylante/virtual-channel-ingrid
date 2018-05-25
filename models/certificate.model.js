module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'certificates',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      virtualchannelId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('opening', 'closing'),
        allowNull: false
      },
      sig: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      ingridSig: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      from: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: 'certificates',
      timestamps: true
    }
  )
}
