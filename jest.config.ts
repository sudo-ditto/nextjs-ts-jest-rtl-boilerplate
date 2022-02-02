import { defaults } from 'jest-config';
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    // Your jest setup file
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // Ignore the following directories
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    // Enables CSS modules
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy'
    },
    //For Jest (27 or later), jsdom is no longer the default environment.
    testEnvironment: 'jest-environment-jsdom',
    // E.g - to make custom test utilities accessible in Jest test files without using relative imports
    moduleDirectories: [
        'node_modules',
        // add the directory with the test-utils.js file, for example:
        './src/utils/test-utils' // a utility folder
    ],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};

export default config;
