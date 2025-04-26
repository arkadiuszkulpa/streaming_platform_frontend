const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('index.html contains the correct title and content', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    const dom = new JSDOM(html);
    const { document } = dom.window;

    // Test for the title
    expect(document.title).toBe('Movie Platform');

    // Test for the heading
    const heading = document.querySelector('h1');
    expect(heading.textContent).toBe('Welcome to the Movie Platform!');

    // Test for the paragraph
    const paragraph = document.querySelector('p');
    expect(paragraph.textContent).toBe('If you see this message, your frontend is working correctly.');
});