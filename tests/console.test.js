const { execSync } = require('child_process');

test('app.js logs "Frontend is working!" to the console', () => {
    const output = execSync('node scripts/app.js').toString().trim();
    expect(output).toBe('Frontend is working!');
});