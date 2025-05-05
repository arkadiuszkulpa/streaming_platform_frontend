const { execSync } = require('child_process');

describe('scripts/app.js', () => {
  test('logs the correct message to the console', () => {
    const output = execSync('node scripts/app.js').toString().trim();
    expect(output).toBe('Frontend is working!');
  });
});