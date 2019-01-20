var config = {
    mode: 'development',
    entry: {
        'main.js': [
            './src/index.js',
        ]
    },
    output: {
        filename: 'main.js',
        library: 'fabricashape'
    },
    devtool: "source-map",
    watch: true // Re-build on each file change
};

module.exports = config;
