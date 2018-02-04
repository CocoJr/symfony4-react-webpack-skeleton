/*
 * @author Thibault Colette <thibaultcolette94@gmail.com>
 * @copyright 2018 Thibault Colette
 * @license Apache-2.0
 */

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
        loader: 'css-loader',
        options: {
            importLoaders: 1
        }
    }
];

let cleanOptions = {
    root: ABSOLUTE_ASSETS_DIR,
    verbose: true,
    dry: false,
    watch: DEV,
    beforeEmit: true
};

let config = {
    watch: DEV,
    devtool: DEV ? "cheap-module-eval-source-map" : false,
    entry: {
        'react-app.js': [
            'babel-polyfill',
            './src/assets/react/index.js'
        ],
        'app.js': [
            './src/assets/js/app.js'
        ],
        'app.css': [
            './src/assets/css/app.css',
            './src/assets/scss/app.scss'
        ]
    },
    output: {
        filename: '[chunkhash:12].[name]',
        path: ABSOLUTE_ASSETS_DIR
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: cssLoaders
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|svg|woff2?|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [...cssLoaders, "sass-loader"]
    			})
			},
		]
	},
	plugins: [
        new webpack.DefinePlugin({
            API_V1_BASE_URL: '"'+process.env.API_V1_BASE_URL+'"',
        }),
		new CleanWebpackPlugin([ABSOLUTE_ASSETS_DIR], cleanOptions),
		new ExtractTextPlugin('[name]'),
		new ManifestPlugin({
			fileName: 'manifest.json',
			basePath: WEB_ASSETS_DIR,
			map: (obj) => {
			obj.name = obj.name
				.replace(/\.js\.js$/, '.js')
				.replace(/\.css\.css$/, '.css');

				return obj;
			}
		}),
	]
};

if (!DEV) {
    config.plugins.push(new UglifyJSPlugin());
}

module.exports = config;