const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    //Informa aonde vai jogar o bundle. Geralmente na pasta public
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // permite pegar os arquivos css inportados e botar numa tag style no index.html
          },
          {
            loader: 'css-loader', // permite os imports de dentro do css (ex:background:url('')) ou um arquivo css importando outro arquivo css
          },
        ],
      },
      {
        test: /.*\.(gif|png|jpeg?g)$/i,
        use: [
          {
            loader: 'file-loader', // permite importação de arquivos de imagem na aplicação
          },
        ],
      },
    ],
  },
};
