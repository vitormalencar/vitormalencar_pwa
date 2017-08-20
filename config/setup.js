const glob                          = require('glob');
const { join }                      = require('path');
const webpack                       = require('webpack');
const babel                         = require("./babel");
const uglify                        = require("./uglify");
const OfflinePlugin                 = require('offline-plugin');
const PurifyCSSPlugin               = require('purifycss-webpack');
const Copy                          = require('copy-webpack-plugin');
const HTML                          = require('html-webpack-plugin');
const Clean                         = require('clean-webpack-plugin');
const CnameWebpackPlugin            = require('cname-webpack-plugin');
const Dashboard                     = require('webpack-dashboard/plugin');
const CompressionPlugin             = require("compression-webpack-plugin");
const SWPrecache                    = require('sw-precache-webpack-plugin');
const ExtractText                   = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin     = require('style-ext-html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CriticalPlugin                = require('webpack-plugin-critical').CriticalPlugin;
const BundleAnalyzerPlugin          = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const root = join(__dirname, '..');

module.exports = isProd => {
  // base plugins array
  const plugins = [
    new Clean(['dist'], { root }),
    new Copy([{ context: 'src/static/', from: '**/*.*' }]),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
    }),
    new HTML({
      minify: {
        collapseWhitespace: true
      },
      template: 'src/index.html',
      inlineSource: '.(js)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        babel,
        postcss: [require('autoprefixer')({ browsers: ['last 3 version'] })]
      }
    })
  ];

  if (isProd) {
    babel.presets.push('babili');

    plugins.push(
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin(uglify),
      new ExtractText('styles.[hash].css'),
      new StyleExtHtmlWebpackPlugin(),
      new PurifyCSSPlugin({
        paths: glob.sync(join(__dirname, 'src/*.html')),
        moduleExtensions: ['.html', '.js'],
        verbose: true,
        minimize: true
      }),
      new OfflinePlugin({
        AppCache: false,
        relativePaths: false,
        publicPath: '/',
        updateStrategy: 'all',
        safeToUseOptionalCaches: true,
        caches: 'all',
        ServiceWorker: {
          navigateFallbackURL: '/',
          events: true
        }
      }),
      new CnameWebpackPlugin({ domain: 'www.vitormalencar.com' }));
  } else {
    // dev only
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new Dashboard()
    );
  }

  return plugins;
};
