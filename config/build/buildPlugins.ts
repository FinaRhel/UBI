import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

function buildPlugins(path: string, isDev: boolean): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        ...isDev ? [new ReactRefreshWebpackPlugin()] : [],
        ...isDev ? [new webpack.HotModuleReplacementPlugin()] : [],
        ...isDev ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] : [],
    ];
}

export default buildPlugins;
