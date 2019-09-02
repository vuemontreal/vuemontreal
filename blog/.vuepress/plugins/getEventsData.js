
const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const moment = require("moment");

const EVENTS_PATH = path.resolve(__dirname, "../../events");

const events = glob.sync(`${EVENTS_PATH}/**/*.json`, {})
                .map(file => {
                  let data;
                  try {
                    data = JSON.parse(fs.readFileSync(file, "utf8"));
                    data.startAt = moment(data.startAt);
                    data.endAt = moment(data.endAt);
                  } catch(err) {
                    data = null
                  }

                  return {
                    ...data
                  }
                })
                .filter(value => Object.keys(value).length !== 0)
                .sort((a, b) => b.startAt.valueOf() - a.startAt.valueOf());

module.exports = events;