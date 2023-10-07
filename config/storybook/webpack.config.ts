import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
        }

        return rule;
    });
    config!.module!.rules.push(buildCssLoaders(true));
    config!.module!.rules.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
    });
    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
            __PROJECT__: 'storybook',
        }),
    );
    return config;
};
