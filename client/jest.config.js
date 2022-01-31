module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  setupFilesAfterEnv: ['./src/tests/testConfig.js'],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  roots: ["./src/"]
};
