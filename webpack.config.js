var path    = require('path'),
    webpack = require('webpack');

    module.exports = {
      entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './js/app'
      ],
      output: {
        filename: "js/bundle.js"
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ],
      resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.less'],
        alias: {
          'appRoot': path.join(__dirname, 'js'),
          'vendor': 'appRoot/vendor'
        }
      },
      module: {
        loaders: [
           {
             test: /\.less$/,
             loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 version!less-loader'
           },
           {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
          },
          {
             test: /\.(png|jpg)$/,
             loader: 'url-loader?limit=8192'
           },
           {
         test: /\.jsx?$/,
         include: [
           path.join(__dirname, 'js')
         ],
         loaders: [
           'react-hot',
           'babel?presets[]=react,presets[]=es2015',
           'reflux-wrap-loader'
         ]
        }
       ]
     } 
};
