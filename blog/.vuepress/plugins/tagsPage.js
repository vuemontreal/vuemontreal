const toMD = ({tags, events}) => {
  const stringTags = JSON.stringify(tags, null, " ").replace(/\n/g, "").replace(/'/g, "\\&apos\\;");
  const stringEvents = JSON.stringify(events, null, " ").replace(/\n/g, "").replace(/'/g, "\\&apos\\;");

  return `
<tags :tags='${stringTags}' :events='${stringEvents}' />
`;
};

module.exports = events => {
  // Extract tags from events
  const tags = events.reduce((allTags, event) => {

    event.datas.map(data => {
      data.tags.map(tag => allTags.add(tag))
    });

    return allTags;
  }, new Set());

  return [
    {
      path: "/tags/index.html",
      content: toMD({
        tags: Array.from(tags),
        events,
      })
    }
  ];
};
