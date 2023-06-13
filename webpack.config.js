const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = ({ developments: development}) => ({
    entry: './src/index.ts',
    devtool: development ? 'inline-source-map' : false,
    mode: development ? 'development' : 'production',
    output: {
        filename: 'tmv.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tmv',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self === \'undefined\' ? this : self',
        
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [new ESLintPlugin({ extensions: ['ts']})]
});
