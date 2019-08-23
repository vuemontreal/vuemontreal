const toMD = props => {
  const datas = JSON.stringify(JSON.parse(props), null, " ").replace(/\n/g, "");
  return `<meetup values='${datas}' />`;
};
module.exports = filesExtractedDatas => {
  let pages = [];

  let i = 0;

  filesExtractedDatas.map(elm => {
    i++;
    let name = elm.relativePath.split(".json")[0];
    if (i === 1) {
      name = "events/index";
    }

    pages.push({
      path: "/" + name + ".html",
      content: toMD(elm.data)
    });
  });

  return pages;
};
