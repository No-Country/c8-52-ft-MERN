const getUsers = async (req, res) => {
try {
  res.json({message: 'users'})
} catch (error) {
  console.log(error);
}
}

module.exports = {
  getUsers
}