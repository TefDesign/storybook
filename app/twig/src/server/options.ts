import { sync } from 'read-pkg-up';
import type { LoadOptions } from '@storybook/core-common';

export default {
  packageJson: sync({ cwd: __dirname }).packageJson,
  framework: 'twig',
  frameworkPresets: [require.resolve('./preset')],
} as LoadOptions;
