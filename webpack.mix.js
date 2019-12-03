let mix = require('laravel-mix');

mix
  .sass('src/scss/style.scss', 'public/css')
  .copyDirectory('src/html', 'public');