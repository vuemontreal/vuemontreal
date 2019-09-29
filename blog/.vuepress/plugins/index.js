const events = require("./getEventsData");
const createEventPages = require("./eventPages");
const createTagsPage = require("./tagsPage");
const createEventSidebars = require("./eventSidebars");
const path = require('path');

module.exports = () => {
  const pages = createEventPages(events);

  const tagsPages = createTagsPage(events);
  const createdSidebars = createEventSidebars(events);

  return {
    name: "vuepress-plugin-montreal-blog",
    additionalPages: [
      {
        path: '/upcoming/no-event.html',
        filePath: path.resolve(__dirname, '../templates/no-events.md')
      },
      ...pages,
      ...tagsPages,
    ],
    enhanceAppFiles: [
      createdSidebars,
    ]
  };
};
