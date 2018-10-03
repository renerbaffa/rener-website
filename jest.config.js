module.exports = {
  bail: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/src/*.{test,spec}.{js,jsx}',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  rootDir: '.',
  testEnvironment: 'node',
  transform: { '^.+\\.(js|jsx)?$': '<rootDir>/jest-preprocess.js' },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  testRegex: '/.*(__tests__\\/.*)|(.*(test|spec))\\.(jsx|js)?$',
  setupFiles: ['<rootDir>/loadershim.js'],
}
