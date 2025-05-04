const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('index.html contains the correct title and root div', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    const dom = new JSDOM(html);
    const { document } = dom.window;

    // Test for the title
    expect(document.title).toBe('MyStream.AI | Movie Picks You’ll Actually Love');

    // Test for the root div
    const rootDiv = document.querySelector('#root');
    expect(rootDiv).not.toBeNull();
});