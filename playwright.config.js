module.exports = {
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
};
