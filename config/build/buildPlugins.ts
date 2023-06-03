import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildPlugins(path: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        })
    ]
}