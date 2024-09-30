const Doubt = require("../models/doubtModel");
const logger = require("../services/logService");

exports.createDoubt = async (req, res) => {
  const { studentId, doubtText } = req.body;
  const doubt = new Doubt({ studentId, doubtText });
  await doubt.save();

  logger.logEvent("Doubt Posted", studentId);

  req.io.emit("newDoubt", doubt);
  res.status(201).json(doubt);
};

exports.getUnansweredDoubts = async (req, res) => {
  const doubts = await Doubt.find({ response: null });
  res.status(200).json(doubts);
};

exports.respondToDoubt = async (req, res) => {
  const { id } = req.params;
  const { responseText } = req.body;
  const doubt = await Doubt.findByIdAndUpdate(
    id,
    { response: responseText },
    { new: true }
  );

  logger.logEvent("Doubt Responded", doubt.studentId);

  req.io.emit("doubtResponded", doubt);
  res.status(200).json(doubt);
};
