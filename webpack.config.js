const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/tmv.ts',
    mode: 'production',
    output: {
        filename: 'tmv.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tmv',
        libraryTarget: 'umd2',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    plugins: [new ESLintPlugin({ extensions: ['ts'] })],
};
