const fs = require("fs-extra");

module.exports = (files = []) => {
  return files.map(file => {
    const data = fs.readFileSync(file, "utf8");

    const splitted = file.split("/");
    const len = splitted.length;

    if (len <= 1) return "";

    return {
      data,
      relativePath: [splitted[len - 2], splitted[len - 1]].join("/"),
      absolutePath: file
    };
  });
};
