const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.jsx',
    app: './src/App.jsx'
 },
 resolve: {
     alias: {
         pages: path.resolve(__dirname, 'src/pages/'),
         frameworks: 'pages/FrameworksPage.jsx',
         home: 'pages/HomePage.jsx',
         modeler: 'pages/ModelerPage.jsx',
     },
 },
 module: {
    rules: [
      {
        test: (m) => { return /\.(js|jsx)$/.test(m) },
        exclude: (m) => { return /node_modules/.test(m) },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: (m) => { return /\.css$/.test(m) },
        exclude: (m) => { return /node_modules/.test(m) },
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: (m) => { return /\.(png|jp(e*)g|svg)$/.test(m) },
        exclude: (m) => { return /node_modules/.test(m) },
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          } 
        }]
      }
    ]
  },
  plugins: [],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  }
};
