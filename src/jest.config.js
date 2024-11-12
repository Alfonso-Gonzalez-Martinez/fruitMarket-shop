module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!/src/index.js'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
}