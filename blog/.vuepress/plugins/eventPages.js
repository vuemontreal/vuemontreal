const moment = require("moment");

const toMD = props => {
  const stringDatas = JSON.stringify(props, null, " ").replace(/\n/g, "").replace(/'/g, "\\&apos\\;");

  return `
  ## ${props.title}

  <meetup :values='${stringDatas}' />
  `;
};

module.exports = events => {
  return events.map(event => {
    const path = event.startAt.isBefore(moment())? 'archives' : 'upcoming';
    const eventName = event.startAt.format('YYYY-MM-DD');
    return {
      path: `/${path}/${eventName}.html`,
      content: toMD(event),
      datas: {
        ...event
      }
    };
  });
};