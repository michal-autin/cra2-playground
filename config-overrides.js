const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

/* eslint-disable-next-line no-unused-vars */
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "rgb(72, 96, 255)" },
    javascriptEnabled: true
  })(config, env);
  return config;
};
