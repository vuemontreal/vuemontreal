const md = props => {
  const datas = JSON.stringify(JSON.parse(props), null, " ").replace(/\n/g, "");
  return `<meetup values='${datas}' />`;
};

module.exports = filesExtractedDatas => {
  let pages = [];

  filesExtractedDatas.map(elm => {
    const name = elm.relativePath.split(".json")[0];
    pages.push({
      path: "/" + name + ".html",
      content: md(elm.data)
    });
  });

  return pages;
};
