const { ports: { client } } = require('../ports.json');

module.exports = {
  mount: {
    public: {
      url: '/',
      static: true
    },
    src: {
      url: '/dist'
    }
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  devOptions: {
    port: client
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ]
};