const sveltePreprocess = require('svelte-preprocess')

const preprocess = sveltePreprocess({
  javascript: true,
  scss: true,
  pug: true,
})

module.exports = {
  preprocess: preprocess,
  // ...other svelte options
}
