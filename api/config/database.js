require('dotenv').config();

module.exports = {
    secret: "timeterfrasorvest",
    database: "mongodb://marius:Compliments@windalert-shard-00-00-uzmhe.mongodb.net:27017,windalert-shard-00-01-uzmhe.mongodb.net:27017,windalert-shard-00-02-uzmhe.mongodb.net:27017/windalers?ssl=true&replicaSet=WindAlert-shard-0&authSource=admin&retryWrites=true&w=majority"
  };