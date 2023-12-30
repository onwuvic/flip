const jwt = require("jsonwebtoken");
const {models} = require("./db");

const SECRET = 'mysecret';

const createToken = ({ id, role }) => jwt.sign({ id, role }, SECRET);

const getUserFromToken = (token) => {
  try {
    const user = jwt.verify(token, SECRET);
    return models.User.findOne({ id: user.id });
  } catch (error) {
    return null;
  }
};

module.exports = {
  getUserFromToken,
  createToken,
};
