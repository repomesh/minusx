// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.ASSET_PATH = '/';

var webpack = require('webpack'),
  config = require('../webpack.config');

delete config.chromeExtensionBoilerplate;

config.mode = 'production';

webpack(config, function (err, stats) {
  if (err) {
    console.error('Webpack error:', err);
    throw err;
  }
  
  if (stats.hasErrors()) {
    console.error('Webpack compilation errors:');
    console.error(stats.toString({ colors: true, errorDetails: true }));
    throw new Error('Webpack compilation failed');
  }
  
  if (stats.hasWarnings()) {
    console.warn('Webpack compilation warnings:');
    console.warn(stats.toString({ colors: true, warningsOnly: true }));
  }
  
  console.log('Webpack compilation successful!');
  console.log(stats.toString({ colors: true, chunks: false, modules: false }));
});
