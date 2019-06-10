const ClosurePlugin = require("closure-webpack-plugin");

module.exports = {
  entry: "./app/main.js",
  plugins: [
    new ClosurePlugin.LibraryPlugin({
      closureLibraryBase: require.resolve(
        "google-closure-library/closure/goog/base"
      ),
      deps: [
        require.resolve("google-closure-library/closure/goog/deps"),
        "./app/deps.js"
      ]
    })
  ]
};
