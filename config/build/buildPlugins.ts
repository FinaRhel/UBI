import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default function buildPlugins(path: string, isDev: boolean): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
      new webpack.DefinePlugin({
          __IS_DEV__: JSON.stringify(isDev),
      }),
      new webpack.HotModuleReplacementPlugin(),
      ...isDev ? [new ReactRefreshWebpackPlugin()] : null,
    ]
}