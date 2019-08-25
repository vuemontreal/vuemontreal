const toMD = extractedDatas => {
  const stringDatas = JSON.stringify(extractedDatas, null, " ").replace(
    /\n/g,
    ""
  );

  return `
<tags values='${stringDatas}' />
`;
};

module.exports = pages => {
  let extractedDatas = {
    elems: {},
    tags: []
  };

  pages.map(p => {
    const { datas } = p;

    let tmp = {
      tags: [],
      old: p.datas
    };

    datas.datas.map(({ tags }) => {
      tags.map(t => {
        if (!extractedDatas.tags.includes(t)) extractedDatas.tags.push(t);
        if (!tmp.tags.includes(t)) tmp.tags.push(t);
      });
    });

    extractedDatas.elems[p.path] = tmp;
  });

  return [
    {
      path: "/tags/index.html",
      content: toMD(extractedDatas)
    }
  ];
};
