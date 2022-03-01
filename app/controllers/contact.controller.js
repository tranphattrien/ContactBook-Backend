// Creat and save a new contact
exports.create = (req, res) => {
  res.send({ message: "create handler" });
};
// Retrieve all contacts of a user from the database
exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};
// Find a single contact with an id
exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};
// Update a contact by the id in the request
exports.update = (req, res) => {
  res.send({ message: "update handler" });
};
// Delete a contact with the specified id in the request
exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};
// Delete all
exports.deleteAll = (req, res) => {
  res.send({ message: "deleteALl handler" });
};

exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
