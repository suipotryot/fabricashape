var config = {
    mode: 'development',
    entry: {
        "fabricashape": "./src/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        library: 'fabricashape'
    },
    watch: true // Re-build on each file change
};

module.exports = config;
