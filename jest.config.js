// // Sync object
// const config = {
//     preset: "ts-jest",
//     verbose: true,
//     // Your jest setup file
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//     // Ignore the following directories
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//     // Enables CSS modules
//     moduleNameMapper: {
//         '\\.(scss|sass|css)$': 'identity-obj-proxy'
//     },
//     //For Jest (27 or later), jsdom is no longer the default environment.
//     testEnvironment: 'jest-environment-jsdom',
//     // E.g - to make custom test utilities accessible in Jest test files without using relative imports
//     moduleDirectories: [
//         'node_modules',
//         // add the directory with the test-utils.js file, for example:
//         './src/utils/test-utils' // a utility folder
//     ],
//     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//     transform: {
//         '^.+\\.(ts|tsx)?$': 'ts-jest',
//         '^.+\\.(js|jsx)$': 'babel-jest',
//         '^.+\\.svg$': '<rootDir>/svgTransform.js'
//     },
//     globals: {
//         "ts-jest": {
//           tsConfig: {
//             // allow js in typescript
//             allowJs: true,
//           },
//         },
//       }
// };

// module.exports = config;
// jest.config.js
// module.exports = {
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//     moduleNameMapper: {
//         '\\.(scss|sass|css)$': 'identity-obj-proxy'
//     },
//     moduleDirectories: [
//         'node_modules',
//         'src',
//         './src/utils/test-utils'
//     ],
// };
// jest.config.js
module.exports = {
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        //   // Handle CSS imports (without CSS modules)
        //   '^.+\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        //   '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/__mocks__/fileMock.js`,
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/__mocks__/next/image.tsx`,

        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
        // Handle module aliases
        '^@/components/(.*)$': '<rootDir>/components/$1',

        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/src/utils/test-utils/assetsTransformer.js'
    },
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
        //   '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleDirectories: ['node_modules', 'src', './src/utils/test-utils']
};
