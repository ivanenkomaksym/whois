export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '/node_modules/', // Usually good to keep ignoring node_modules
        '<rootDir>/dist/' // Add this line to ignore the dist directory
      ],
};