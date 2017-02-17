const { MongoClient, ObjectID } = require('mongodb');

let db = undefined;

module.exports = () => {
  return MongoClient
    .connect('mongodb://localhost:27017/nvc-project')
    .then((client) => {
      db = client;
    });
};

module.exports.Need = {
  all() {
    return db.collection('needs').find().sort({name: 1}).toArray();
  },

  find(_id) {
    if (typeof _id !== 'object') {
      _id = ObjectID(_id);
      return db.collection('needs').findOne({_id});
    }
  },

  create(data) {
    return db.collection('needs').insertOne(data, {w: 1});
  },

  delete(_id) {
    if (typeof _id !== 'object') {
      _id = ObjectID(_id);
      return db.collection('needs').deleteOne({_id}, {w: 1});
    }
  }
};
