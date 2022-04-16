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
  findMany() {

  }
})

module.exports = createModel
