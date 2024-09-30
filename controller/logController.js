const logs = [];


exports.getLogs = (req, res) => {
    res.status(200).json(logs);
};


exports.addLog = (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    logs.push({ message, timestamp: new Date() });
    res.status(201).json({ message: 'Log added successfully' });
};
