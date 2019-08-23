const { find, build, extract } = require("./pages");
const { create } = require("./sidebar");
const path = require("path");

module.exports = (givenOpts = {}) => {
  const files = find(
    givenOpts.archivesAbsolutePath || path.resolve(__dirname, "../../archives")
  ).reverse();

  const filesExtractedDatas = extract(files);

  const pages = build(filesExtractedDatas);
  const createdSidebar = create(filesExtractedDatas);

  return {
    name: "vuepress-plugin-montreal-blog",
    additionalPages: pages,
    enhanceAppFiles: [createdSidebar]
  };
};
