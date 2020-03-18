const values = {
  port : "8000",
  mongoUrl : "mongodb://" + process.env.MONGODB_USERNAME + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_HOST_IP +":" + (process.env.MONGODB_HOST_PORT || '27017') + "/",
  mongoDbName : process.env.MONGODB_DATABASE,
  mongoCollection : process.env.MONGODB_COLLECTION
};

module.exports = values;