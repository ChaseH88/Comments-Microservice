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
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
//   routes: [
//     /* Enable an SPA Fallback in development: */
//     // {"match": "routes", "src": ".*", "dest": "/index.html"},
//   ],
//   optimize: {
//     /* Example: Bundle your final build: */
//     // "bundle": true,
//   },
//   packageOptions: {
//     /* ... */
//   },
//   devOptions: {
//     /* ... */
//   },
//   buildOptions: {
//     /* ... */
//   },
};