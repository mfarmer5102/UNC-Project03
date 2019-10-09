module.exports = function(sequelize, DataTypes) {
  var Entry = sequelize.define("Entry", {
    user_uuid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entry_date: {
      type: DataTypes.DATEONLY
      // allowNull: false
    },

    source_uuid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Entry;
};
