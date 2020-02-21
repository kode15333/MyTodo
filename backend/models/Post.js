module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        "Post",
        {
            postnum: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userid: {
                type: Sequelize.STRING(255),
                unique: true,
            },
            title: {
                type: Sequelize.STRING(16)
            },
            content: {
                type: Sequelize.STRING(255),
            },
            create: {
                type: Sequelize.STRING(16)
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
