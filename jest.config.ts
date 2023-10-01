import type { Config } from 'jest'

const config: Config = {
  verbose: true
}

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: [
    'index.ts',
    '<rootDir>/node_modules/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/folhaDePagamento.test.ts'
  ]
}

export default config
