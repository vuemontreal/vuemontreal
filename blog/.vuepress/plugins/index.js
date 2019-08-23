const { find, build, extract } = require("./pages/index");
const path = require("path");

module.exports = (givenOpts = {}) => {
  const files = find(
    givenOpts.archivesAbsolutePath || path.resolve(__dirname, "../../archives")
  ).reverse();

  const filesExtractedDatas = extract(files);

  const pages = build(filesExtractedDatas);

  console.log(pages);

  return {
    name: "vuepress-plugin-montreal-blog",
    additionalPages: pages
  };
};
