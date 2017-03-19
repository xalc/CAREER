var path = require ('path');
module.exports ={
    entry:[
        './assets/js/app-client.js'],
    output :{
        filename:"bundle.js",
        path: path.join(__dirname,"public/js")
    },
    devtool:"source-map",
    watch:true,
    devServer: {
            contentBase: path.join(__dirname, "assets"),
            compress: true,
            port: 8080
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,             
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015','react'],
                            // plugins:['syntax-dynamic-import']
                        }
                    }
                ]
            }
        ]
    }
}