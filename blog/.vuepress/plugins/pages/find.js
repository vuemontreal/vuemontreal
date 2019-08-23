const glob = require("glob");

module.exports =  (archivesAbsolutePath) => {

    const files = glob.sync(archivesAbsolutePath + "/**/*.json", {})

    return files;
}