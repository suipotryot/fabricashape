var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');

var config = {
    mode: 'development',
    entry: './all-tests.js',
    output: {
        filename: 'testBundle.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        fs: 'empty'
    },

    plugins: [
        new WebpackShellPlugin({
            onBuildExit: "./node_modules/.bin/mocha dist/testBundle.js"
        })
    ]
};

module.exports = config;
