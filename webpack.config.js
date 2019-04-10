var config = {
    mode: 'production',
    entry: {
        "fabricashape.min": "./src/index.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        library: 'fabricashape'
    }
};

module.exports = config;
