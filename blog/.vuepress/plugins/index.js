const events = require("./getEventsData");
const createEventPages = require("./eventPages");
const createTagsPage = require("./tagsPage");
const createEventSidebars = require("./eventSidebars");


module.exports = () => {
  const pages = createEventPages(events);

  const tagsPages = createTagsPage(events);
  const createdSidebars = createEventSidebars(events);

  return {
    name: "vuepress-plugin-montreal-blog",
    additionalPages: [
      ...pages,
      ...tagsPages,
    ],
    enhanceAppFiles: [
      createdSidebars,
    ]
  };
};
