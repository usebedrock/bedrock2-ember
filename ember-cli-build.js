'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-prism': {
      'theme': 'twilight',
      'components': ['scss', 'javascript'], //needs to be an array, or undefined.
      'plugins': ['line-highlight']
    },
    outputPaths: {
      app: {
        css: {
          'app': '/assets/app.css',
          'styleguide': '/assets/styleguide.css'
        }
      }
    },
    // Add options here
    sassOptions: {
      // This tells ember-cli-sass to avoid generating the sourcemap file (like vendor.css.map)
      sourceMap: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
  

};
