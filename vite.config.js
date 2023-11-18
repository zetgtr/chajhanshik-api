import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"; //add this line
import laravel from 'laravel-vite-plugin';
import vueJsx from '@vitejs/plugin-vue-jsx';
import CustomHmr from './hmr';

const host = 'localhost'
const path = require('path')
const requireContext = require('require-context');
const jsModules = requireContext(path.resolve(__dirname, './resources/js'), true, /\.js$/);
const filePathsJs = jsModules.keys().map(key => `resources/js/${key}`);

const scssModules = requireContext(path.resolve(__dirname, './resources/sass'), true, /\.scss$/);
const filePathsScss = scssModules.keys().map(key => `resources/sass/${key}`);

const assetsModules = requireContext(path.resolve(__dirname, './resources/assets'), true, /\.scss$/);
const filePathsAssets = assetsModules.keys().map(key => `resources/assets/${key}`);


export default defineConfig({
    plugins: [
        vue(), // write this
        // CustomHmr(),
        laravel({
            input: [
                'resources/sass/app.sass',
                'resources/css/app.css',
                ...filePathsJs,
                ...filePathsScss,
                ...filePathsAssets
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    flags: {
        // Установите флаг experimental-modules
        // при запуске Vite
        // для использования модулей ECMAScript
        // https://vitejs.dev/guide/features.html#experimental-flag-notice
        mode: 'development',
        'experimental-modules': true
    },
    server: {
        host,
        hmr: { host },
    }
});
