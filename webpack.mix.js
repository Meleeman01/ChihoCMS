// webpack.mix.js

let mix = require('laravel-mix');
require('laravel-mix-svelte');

mix
.sass('src/scss/main.scss', 'public/css')
.js('src/main.js', 'public/js')
    .svelte();