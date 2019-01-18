var config = {
    mode: 'production',
    entry: {
        'main.js': [
            './src/index.js',
        ]
    },
    output: {
        filename: 'main.js',
        library: 'fabricashape'
    },
    watch: true // Re-build on each file change
};

module.exports = config;
