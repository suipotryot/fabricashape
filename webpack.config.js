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
    }
};

module.exports = config;
