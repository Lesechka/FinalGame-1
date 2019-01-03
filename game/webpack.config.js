const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const AudioSpritePlugin = require("webpack-audio-sprite-plugin");

module.exports = {
    module: {
    rules: [ 
      // { 
      //   test: /\.mp3$/, 
      //   use: [
      //     {
      //       loader: AudioSpritePlugin.loader(),
      //       options: { name: 'img/[name].[ext]' }
      //     }
      //   ]
        
      // },     
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: './sounds/[name].[ext]',
          },
        }],
      },
   
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  
  // resolve: {
  //   modules: [path.resolve(__dirname, './src'), 'node_modules'],
  //    extentions: [".js", ".jsx", ".json"]
  // },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new AudioSpritePlugin()
  ],
  
};
