const path = require("path");
const fs = require("fs");
const htmlWebpackPlugin = require("html-webpack-plugin");
const srcDir = path.resolve(__dirname, "src");
const TerserPlugin = require("terser-webpack-plugin");
const dirs = fs.readdirSync(srcDir).filter((file) => {
  return fs.statSync(path.join(srcDir, file)).isDirectory();
});
// 获取src下的所有文件夹

const entries = dirs.reduce((entries, dir) => {
  if (/^[0-9].*/.test(dir)) {
    entries["step" + dir] = {
      import: path.resolve(srcDir, dir, "index"),
      dependOn: ["karo"],
    };
  }
  return entries;
}, {});

const htmlWebpackPlugins = dirs.map((dir) => {
  if (/^[0-9].*/.test(dir)) {
    return new htmlWebpackPlugin({
      template: path.join(srcDir, dir, "index.html"),
      filename: `step${dir}.html`,
      chunks: ["step" + dir, "karo"],
    });
  } else {
    return () => {};
  }
});

module.exports = {
  mode: "development",
  entry: {
    ...entries,
    example: {
      import: path.resolve(__dirname, "src", "example", "index.js"),
      dependOn: ["karo"],
    },
    karo: path.resolve(__dirname, "src", "Karo", "index.js"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    ...htmlWebpackPlugins,
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src", "example", "index.html"),
      filename: "index.html",
      chunks: ["example", "karo"],
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
        extractComments: false,
      }),
    ],
  },
};
