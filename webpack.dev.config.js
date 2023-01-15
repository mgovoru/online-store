const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        compress: true,
        contentBase: path.resolve(__dirname, '../dist'),
    },
};
