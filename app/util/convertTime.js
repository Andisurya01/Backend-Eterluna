const { DateTime } = require("luxon");

const convertToIndonesiaTime = (utcDate) => {
  return DateTime.fromJSDate(utcDate, { zone: "utc" }).setZone("Asia/Jakarta").toFormat("yyyy-MM-dd HH:mm:ss");
};

module.exports = convertToIndonesiaTime;