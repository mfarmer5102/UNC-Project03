module.exports = function(sequelize, DataTypes) {
  var Source = sequelize.define("Source", {
    user_uuid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    source_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Source;
  
};
