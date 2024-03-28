const path = require("path");

module.exports = {
  entry: "./src/index.html",
  output: {
    filename: "index.html",
    path: path.resolve(__dirname, "dist"),
  },
};
