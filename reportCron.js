const cron = require("node-cron");

const reportCron = {
  start: () => {
    cron.schedule("* * * * *", () => {
      console.log("Running a report every min");
    });
  },
};

module.exports = reportCron;
