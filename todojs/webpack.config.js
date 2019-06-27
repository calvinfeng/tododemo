const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, '..', 'public'),
        filename: "index.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['@babel/env', '@babel/react']
                } 
            },
            { 
                test: /\.scss$/, 
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};