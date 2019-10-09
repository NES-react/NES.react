module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        filename: "index.js",
        path: __dirname + "/dist",
        libraryTarget: "umd",
        library: "nes.react"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ],
    }
}
