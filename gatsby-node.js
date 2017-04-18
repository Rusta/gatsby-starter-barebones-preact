exports.modifyWebpackConfig = function(config, stage) {
  if (stage !== `develop-html`) {
    config._config.resolve.alias = {
      react: `preact-compat`,
      'react-dom': `preact-compat`
    };
  }
  return config;
}
