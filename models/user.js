const db = require('./db');

//This creates my user in the db
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

//This finds all the users in the db
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
};

//This finds the user by id
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    //This finds all of the relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

//This updates the user in the db
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

//This deletes the user from the db
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
