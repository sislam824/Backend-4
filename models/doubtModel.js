const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    doubtText: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    response: { type: String, default: null },
});

module.exports = mongoose.model('Doubt', doubtSchema);
