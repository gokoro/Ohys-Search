class Search {
  constructor(Model) {
    this.Model = Model
  }
  async find(id) {
    const Model = this.Model

    return await Model.findById(id).exec()
  }
}

module.exports = Search
