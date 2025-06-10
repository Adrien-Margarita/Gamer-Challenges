import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  roots: ['<rootDir>/tests'], // adapte si nécessaire
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // si tu utilises @ pour les imports absolus
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
