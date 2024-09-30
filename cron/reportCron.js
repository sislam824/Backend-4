const cron = require("node-cron");

const reportCron = {
  start: () => {
    cron.schedule("* * * * *", () => {
      console.log("Running report job every minute...");
    });
  }
};

module.exports = reportCron;
