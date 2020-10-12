const sveltePreprocess = require('svelte-preprocess')

const preprocess = sveltePreprocess({
  javascript: true,
  scss: true,
  pug: true,
  postcss: {
      plugins: [
        require('autoprefixer')({
          grid: 'autoplace',
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'ie >= 11'],
        }),
      ],
    },
  })

module.exports = {
  preprocess: preprocess,
  // ...other svelte options
}
