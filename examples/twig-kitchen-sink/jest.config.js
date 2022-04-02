const config = require('../../jest.config');

module.exports = {
  ...config,
  roots: [__dirname],
  transform: {
    ...config.transform,
    '.*\\.(twig)$': '<rootDir>/node_modules/jest-raw-loader',
  },
  moduleFileExtensions: [...config.moduleFileExtensions, 'twig'],
};
