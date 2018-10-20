module.exports = (sequelize, DataTypes) => {
	var Archive = sequelize.define("Archive", {
		pdx: {
			type: DataTypes.STRING
		},
		box: {
			type: DataTypes.STRING
		},
		exempt: {
			type: DataTypes.BOOLEAN
		},
		record_title: {
			type: DataTypes.STRING
		},
		series_title: {
			type: DataTypes.STRING
		},
		folder_number: {
			type: DataTypes.INTEGER
		},
		folder_title: {
			type: DataTypes.STRING
		},
		document_date: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		notes: {
			type: DataTypes.STRING
		}
	})

/*	Archive.associate = models => {
		Archive.belongsTo(models.Users, {
			foreignKey: {
				allowNull: false
			}
		})
	}*/

	return Archive
}
