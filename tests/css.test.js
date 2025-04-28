const fs = require('fs');
const path = require('path');

test('style.css contains expected styles', () => {
    const css = fs.readFileSync(path.resolve(__dirname, '../styles/style.css'), 'utf8');

    // Check for body background color
    expect(css).toContain('background-color: #f4f4f4;');

    // Check for h1 color
    expect(css).toContain('color: #0073e6;');
});