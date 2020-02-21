module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        "User",
        {
            usernum: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userid: {
                type: Sequelize.STRING(255)
            },
            userpw: {
                type: Sequelize.STRING(16)
            },
            nickname: {
                type: Sequelize.STRING(255),
                unique: true
            }
        },
        {
            timestamps: true,
            charset: "utf8"
        }
    );
};
