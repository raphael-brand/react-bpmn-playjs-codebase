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
        use: [
          'style-loader',
          {
           loader: 'css-loader',
           options: {
            importLoaders: 1,
            modules: true
           }
        },
        ],
        
        include: /bpmn\-js.*\.css$/
      
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
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
