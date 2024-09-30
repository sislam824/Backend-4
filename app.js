const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const logger = require("./services/logService");


const reportCron = require("./cron/reportCron");


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const config = require('./config/config');


mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

require("./sockets/socket")(io);

app.use("/api/doubts", require("./routes/doubts"));
app.use("/api/upload", require("./routes/upload"));
app.use("/api/send-email", require("./routes/email"));
app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

reportCron.start();
