const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@layouts' : 'src/layouts',
    '@views' : 'src/views',
    '@utilities' : 'src/utilities',

  })(config)

  return config
}