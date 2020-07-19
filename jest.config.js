module.exports = {
  setupFilesAfterEnv: ['./__tests__/setup.ts'],
  rootDir: 'src',
  testMatch: [
    '**/__tests__/**/*.(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
