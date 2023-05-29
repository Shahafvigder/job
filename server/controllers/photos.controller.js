const pixabayService = require("../services/pixabay.service")

exports.getAllphotosController = async (req, res) => {
  const data = await pixabayService.getAllphotos();
  res.status(200).send(data);
};
