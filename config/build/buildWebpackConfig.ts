import {BuildOptions} from "./types/config";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions) {
    const { mode, paths, isDev } = options;
    const { entry, build, html } = paths;
    return {
        mode,
        entry,
        output: {
            filename: "[name].[contenthash].js",
            path: build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(html),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}