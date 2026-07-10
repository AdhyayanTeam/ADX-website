const fs = require('fs');
const path = require('path');

const src = '/home/chakresh/.gemini/antigravity/brain/a81387fe-a4d4-4086-9f22-c79be6fa64f3/coaching_dashboard_1783661865593.png';
const dest = path.join(__dirname, 'public', 'coaching_dashboard.png');

try {
  fs.copyFileSync(src, dest);
  console.log('Copied successfully to ' + dest);
} catch (err) {
  console.error('Error copying file:', err);
}
