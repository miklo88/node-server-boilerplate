const bcrypt = require("bcryptjs");
const db = require("../data/dbConfig");

function find() {
  return db("users").select("id", "email");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "name", "email", "password");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first("id", "email");
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);

  const [id] = await db("users").insert(user);

  return findById(id);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove
};
