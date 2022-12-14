const fs = require('fs');
const path = require('path');
const db = path.join(__dirname, '../db/users.json');

// Get All users or limit users
exports.getUsers = (req, res) => {
  fs.readFile(db, async (err, data) => {
    if (err) {
      return res.send(err, err.message);
    } else {
      const users = await JSON.parse(data);
      const { limit } = req.query;
      limit <= users.length
        ? res.status(200).send(users.slice(0, limit))
        : res.status(200).send(users);
    }
  });
};

// Get a random user
exports.getRandomUser = (req, res) => {
  fs.readFile(db, async (err, data) => {
    if (err) {
      return res.send(err, err.message);
    } else {
      const users = await JSON.parse(data);
      const random = Math.floor(Math.random() * users.length);
      res.status(200).send(users[random]);
    }
  });
};

exports.saveUser = (req, res) => {
  fs.readFile(db, async (err, data) => {
    if (err) {
      return res.send(err, err.message);
    } else {
      const users = await JSON.parse(data);
      await users.push(req.body);
      await res.status(201).send({ message: 'User Created successfully!' });
      fs.writeFile(db, JSON.stringify(users), (err) => {
        if (err) {
          console.log(err.message);
        }
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  fs.readFile(db, async (err, data) => {
    if (err) {
      return res.send(err, err.message);
    } else {
      const users = await JSON.parse(data);
      const newUsers = users.filter((user) => user.id !== id);

      users.length === newUsers.length
        ? res.status(404).send({ message: 'No user found!' })
        : fs.writeFile(db, JSON.stringify(newUsers), (err) => {
            if (err) {
              console.log(err.message);
            }
          });
      res.status(201).send({ message: 'User deleted successfully!' });
    }
  });
};
