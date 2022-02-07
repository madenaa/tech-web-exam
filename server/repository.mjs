import Sequelize from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './playlistss.db'
});

const Playlist = sequelize.define('playlist', {  
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            min: 3
        }
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

const Song = sequelize.define('song', { 
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            min: 5
        }
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: 5,
          isUrl: true,
        },
      },
    genre:{
        type: Sequelize.ENUM(
            "POP",
            "ALTERNATIVE"
          ),
        allowNull:false,

    }
});

Playlist.hasMany(Song, {foreignKey: 'playlistId'});
Song.belongsTo(Playlist, {foreignKey: 'playlistId'})

async function initialize() {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
}

export {
    initialize,
    Playlist, Song
}



