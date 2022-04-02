import { findDistEsm } from '@storybook/core-common';
import type { Configuration } from 'webpack';
import type { StorybookConfig } from '@storybook/core-common';

export function webpack(config: Configuration) {
  config.module.rules.push({
    test: /\.twig$/,
    use: require.resolve('twig-loader') as string,
  });

  return config;
}

export const previewAnnotations: StorybookConfig['previewAnnotations'] = (entry = []) => {
  return [...entry, findDistEsm(__dirname, 'client/preview/config')];
};
