module.exports = filesExtractedDatas => {
  const meetupDates = filesExtractedDatas.map(page => {
    let normalizeName = page.relativePath.split("/")[1].split(".")[0];

    return [normalizeName, normalizeName];
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
            const lastMeetup = meetupDates.find(page => moment(page[0]).isBefore(moment()) );
            const nextMeetup = meetupDates.find(page => moment(page[0]).isAfter(moment()) );
            if (!siteData.themeConfig['sidebar']) siteData.themeConfig['sidebar'] = {}
            siteData.themeConfig.sidebar['/archives/'] = meetupDates.filter(page => moment(page[0]).isBefore(moment()) );
            if (!siteData.themeConfig.nav) siteData.themeConfig.nav = []
            siteData.themeConfig.nav[0].items[0].link = "/archives/" + nextMeetup[0];
            siteData.themeConfig.nav[0].items[2].link = "/archives/" + lastMeetup[0];
          }
        `
  };
};
