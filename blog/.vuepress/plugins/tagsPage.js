const toMD = ({tags, events}) => {
  const stringTags = JSON.stringify(tags, null, " ").replace(/\n/g, "").replace(/'/g, "\\&apos\\;");
  const stringEvents = JSON.stringify(events, null, " ").replace(/\n/g, "").replace(/'/g, "\\&apos\\;");

  return `
<tags :tags='${stringTags}' :events='${stringEvents}' />
`;
};

module.exports = events => {
  let extractedDatas = {
    elems: {},
    tags: []
  };

  // Extract tags from events
  const tags = events.reduce((allTags, event) => {

    event.datas.map(data => {
      data.tags.map(tag => allTags.add(tag))
    });

    return allTags;
    eventTags = datas.tags

    let tmp = {
      tags: [],
      old: event.datas
    };

    datas.datas.map(({ tags }) => {
      tags.map(t => {
        if (!extractedDatas.tags.includes(t)) extractedDatas.tags.push(t);
        if (!tmp.tags.includes(t)) tmp.tags.push(t);
      });
    });

    extractedDatas.elems[event.path] = tmp;
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
