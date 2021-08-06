module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/src/**/*.d.ts'],
    coveragePathIgnorePatterns: ['types.ts'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 0
        }
    },
    globals: {
        'ts-jest': {
            diagnostics: 'pretty'
        }
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    modulePaths: ['<rootDir>'],
    preset: 'ts-jest',
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    setupFiles: ['<rootDir>/tests/setupTests.ts'],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTestFrameworkAdditions.tsx'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/?(*.)(spec|test).(j|t)s?(x)'],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.css$': '<rootDir>/tests/cssTransform.js',
        '^.+\\.tsx?$': 'ts-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$']
};
