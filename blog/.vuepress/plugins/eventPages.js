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
    // We create pages for past events under `archives` otherwise it goes in `upcoming`.
    // /!\ this happens at compile time, so upcoming page might still exist after events start date.
    // Ideally this should be donne at runtime.
    //  && !event.done
    console.log(event.startAt.isBefore(moment()));
    const path = event.startAt.isBefore(moment()) ? 'archives' : 'upcoming';
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