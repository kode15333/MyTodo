module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        "Board",
        {
            postid: {
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
            done: {
                type: Sequelize.STRING(1)                     
            },
        },
        {
            timestamps: true,
            charset: "utf8"
        }
    );
};
