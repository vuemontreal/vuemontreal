module.exports = filesExtractedDatas => {
  let sidebar = [];
  let firstItem = null;

  let i = 0;

  filesExtractedDatas.map(page => {
    i++;
    let normalizeName = page.relativePath.split("/")[1].split(".")[0];
    if (i === 1) {
      firstItem = normalizeName;
    } else {
      sidebar.push([normalizeName, normalizeName]);
    }
  });

  const Archives = {
    text: "Archives",
    link: "/archives/" + sidebar[0][0]
  };

  return {
    name: "docgen-enhancer",
    content: `
          export default ({
            Vue, // the version of Vue being used in the VuePress app
            options, // the options for the root Vue instance
            router, // the router instance for the app
            siteData // site metadata
          }) => {
            
            const sidebar = ${JSON.stringify(sidebar)};
            const archives = ${JSON.stringify(Archives)};
            if (!siteData.themeConfig['sidebar']) siteData.themeConfig['sidebar'] = {}
            siteData.themeConfig.sidebar['/archives/'] = sidebar;
            if (!siteData.themeConfig.nav) siteData.themeConfig.nav = []
            siteData.themeConfig.nav[0].items[2] = archives
          }
        `
  };
};
