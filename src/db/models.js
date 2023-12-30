const nano = require('nanoid')

const createModel = (db, table) => ({
  findOne(filter = {}) {
    if (!filter) {
      db.get(table)
        .head()
        .value()
    }

    return db.get(table)
      .find(filter)
      .value()
  },
  findMany(filter) {
    if (!filter) {
      return db.get(table)
        .orderBy(['createdAt'], ['desc'])
        .value()
    }

    return db.get(table)
      .filter(filter)
      .orderBy(['createdAt'], ['desc'])
      .value()
  }
})

module.exports = createModel
