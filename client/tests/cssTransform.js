// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
    getCacheKey() {
        return 'cssTransform';
    },
    process() {
        return 'module.exports = {};';
    }
};
