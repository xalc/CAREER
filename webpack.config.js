var path = require ('path');
module.exports ={
    entry:'./assets/js/app-client.js',
    output :{
        filename:"bundle.js",
        path: path.join(__dirname,"public/js")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
              
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