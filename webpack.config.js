const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['yarn run:dev']
        })
    ],
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()],
    watch: NODE_ENV === 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
}
