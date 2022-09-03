const fs = require('fs');
const path = require('path');
const db = path.join(__dirname, '../db/users.json');

exports.getUsers = (req, res) => {
  fs.readFile(db, async (err, data) => {
    if (err) {
      return res.send(err, err.message);
    } else {
      const users = await JSON.parse(data);
      const { limit } = req.query;
      limit <= users.length ? res.send(users.slice(0, limit)) : res.send(users);
    }
  });
};
