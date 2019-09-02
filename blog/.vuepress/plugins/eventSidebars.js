module.exports = events => {
  const meetupDates = events.map(event => {
    return event.startAt.format('YYYY-MM-DD');
  });

  return {
    name: "docgen-enhancer",
    content: `
          import moment from 'moment';
          export default ({
            Vue, // the version of Vue being used in the VuePress app
            options, // the options for the root Vue instance
            router, // the router instance for the app
            siteData // site metadata
          }) => {

            const meetupDates = ${JSON.stringify(meetupDates)};
            const previousMeetups = meetupDates.filter(page => moment(page).isBefore(moment()) )
            const upcomingMeetups = meetupDates.filter(page => moment(page).isAfter(moment()) );
            if (!siteData.themeConfig['sidebar']) siteData.themeConfig['sidebar'] = {}
            siteData.themeConfig.sidebar['/archives/'] = previousMeetups.map(m => [m,m]);
            siteData.themeConfig.sidebar['/upcoming/'] = upcomingMeetups.map(m => [m,m]);
            if (!siteData.themeConfig.nav) siteData.themeConfig.nav = []
            siteData.themeConfig.nav[0].items[0].link = "/upcoming/" + upcomingMeetups[0];
            siteData.themeConfig.nav[0].items[2].link = "/archives/" + previousMeetups[0];
          }
        `
  };
};
