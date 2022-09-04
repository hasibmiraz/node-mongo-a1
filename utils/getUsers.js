const fs = require('fs');
const path = require('path');
const db = path.join(__dirname, '../db/users.json');

const getAllUsers = () => {
  fs.readFile(db, async (err, data) => {
    if (err) {
      return res.send(err, err.message);
    } else {
      const users = await JSON.parse(data);
      return users;
    }
  });
};

module.exports = getAllUsers;
