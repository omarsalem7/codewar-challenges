const assert = require('chai').assert;
describe("Sample tests", () => {
    const today = new Date();
    it("should work for today", () => {
        let actualToday = isToday(today);
        assertNotPrinting(actualToday);
        assert.strictEqual(actualToday, true)
    });

    it("should work for tomorrow", () => {
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        assert.strictEqual(isToday(tomorrow), false);
    });

    it("should work for yesterday", () => {
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        assert.strictEqual(isToday(yesterday), false);
    });

    function assertNotPrinting(actual) {
        assert.isDefined(actual, "You should return true or false. Did you print the answer instead?\n");
    }
});