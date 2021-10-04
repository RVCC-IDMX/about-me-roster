// vite.config.js
import content from '@originjs/vite-plugin-content';

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    content(),
    /* options */
  ],
};
