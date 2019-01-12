function fakeExtensionManager() {
    /**
     * @type {boolean}
     */
    let valid = false;

    /**
     * @param {boolean} value
     */
    function willBeValid(value) {
        valid = value;
    }

    /**
     * @param {string} fileName
     */
    async function isValid(fileName) {
        return valid;
    }

    return {
        willBeValid,
        isValid,
    };
}
module.exports = fakeExtensionManager;
