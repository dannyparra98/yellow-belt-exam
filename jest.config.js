// Sync object
/** @type {import('@jest/type').Config.InitialOptions} */

const config = {
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      funtions: 100,
      lines: 100,
      statements: 90,
    },
  },
};

module.exports = config;
