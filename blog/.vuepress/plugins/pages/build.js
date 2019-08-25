const toMD = props => {
  const jsonData = JSON.parse(props);
  const stringDatas = JSON.stringify(jsonData, null, " ").replace(/\n/g, "");
  return `
  ## ${jsonData.title}

  <meetup values='${stringDatas}' />
  `;
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
      content: toMD(elm.data),
      datas: JSON.parse(elm.data)
    });
  });

  return pages;
};
