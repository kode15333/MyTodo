module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        "Board",
        {
            postnum: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userid: {
                type: Sequelize.STRING(255),
            },
            title: {
                type: Sequelize.STRING(16)
            },
            content: {
                type: Sequelize.STRING(255),
            },
            state: {
                type: Sequelize.STRING(16)
            },
        },
        {
            timestamps: true,
            charset: "utf8"
        }
    );
};
