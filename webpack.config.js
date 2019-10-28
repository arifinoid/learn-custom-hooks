module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["cheap-module-source-map"],
        enforce: "pre"
      }
    ]
  },
  output: {
    crossOriginLoading: "anonymous"
  }
};
