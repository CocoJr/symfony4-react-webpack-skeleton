var webpack = require('webpack');

const BASE_ASSETS_DIR = './public/';
const WEB_ASSETS_DIR = 'assets/';
const ASSETS_DIR = BASE_ASSETS_DIR + WEB_ASSETS_DIR;

const DEV = process.env.ENV === 'dev';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const ABSOLUTE_ASSETS_DIR = path.resolve(__dirname, ASSETS_DIR);

let cssLoaders = [
    {
        loader: 'css-loader'
    },
];

let cleanOptions = {
    root: path.resolve(__dirname, ABSOLUTE_ASSETS_DIR + '/../'),
    verbose: true,
    dry: false,
    watch: DEV,
    beforeEmit: true
};

let rules = {
    'js': {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader'
        }
    },
    'ressources': {
        test: /\.(png|jpg|jpeg|gif|eot|svg|woff2?|ttf)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }
    },
    'css': {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
    },
    'scss': {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [...cssLoaders, "sass-loader"]
        })
    },
};

let config = [
    {
        watch: DEV,
        devtool: DEV ? "cheap-module-eval-source-map" : false,
        entry: {
            'react-app': [
                'babel-polyfill',
                './src/assets/react/index.js'
            ],
            'app': [
                './src/assets/js/app.js'
            ],
        },
        output: {
            filename: '[chunkhash:12].[name].js',
            path: ABSOLUTE_ASSETS_DIR + '/js',
        },
        plugins: [
            new webpack.DefinePlugin({
                API_V1_BASE_URL: '"' + process.env.API_V1_BASE_URL + '"',
            }),
            new ExtractTextPlugin('[name]'),
            new CleanWebpackPlugin([ABSOLUTE_ASSETS_DIR + '/js'], cleanOptions),
            new ManifestPlugin({
                fileName: 'manifest.json',
                basePath: WEB_ASSETS_DIR+'js/'
            }),
        ],
        module: {
            rules: [rules.js, rules.ressources]
        },
    },
    {
        watch: DEV,
        devtool: DEV ? "cheap-module-eval-source-map" : false,
        entry: {
            'app': [
                './src/assets/scss/app.scss'
            ],
            'app2': [
                './src/assets/css/app.css'
            ]
        },
        output: {
            filename: '[chunkhash:12].[name].css',
            path: ABSOLUTE_ASSETS_DIR + '/css',
        },
        plugins: [
            new ExtractTextPlugin('[chunkhash:12].[name].css'),
            new CleanWebpackPlugin([ABSOLUTE_ASSETS_DIR + '/css'], cleanOptions),
            new ManifestPlugin({
                fileName: 'manifest.json',
                basePath: WEB_ASSETS_DIR+'css/'
            }),
        ],
        module: {
            rules: [rules.ressources, rules.scss, rules.css]
        },
    },
];

if (!DEV) {
    config[0].plugins.push(new UglifyJSPlugin());
}

module.exports = config;