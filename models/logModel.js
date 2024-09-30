const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', logSchema);
