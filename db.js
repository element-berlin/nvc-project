const { MongoClient, ObjectID } = require('mongodb');

let db = undefined;

module.exports = () => {
  return MongoClient
    .connect('mongodb://localhost:27017/articles')
    .then((client) => {
      db = client;
    });
};

module.exports.Name = {
  all() {
    return db.collection('names').find().sort({name: 1}).toArray();
  },

  find(_id) {
    if (typeof _id !== 'object') {
      _id = ObjectID(_id);
      return db.collection('names').findOne({_id});
    }
  },

  create(data) {
    return db.collection('names').insertOne(data, {w: 1});
  },

  delete(_id) {
    if (typeof _id !== 'object') {
      _id = ObjectID(_id);
      return db.collection('names').deleteOne({_id}, {w: 1});
    }
  }
};
