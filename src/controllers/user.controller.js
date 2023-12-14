const createUser = (req, res) => {
  res.json({
    message: "Created successfully from controller",
  });
};

module.exports = { createUser };
