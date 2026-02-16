const fs = require('fs');
const path = require('path');

// Path to the built assets folder that Open Next generates
const assetsPath = path.join(__dirname, '..', '.open-next', 'assets', 'images', 'case-study', 'study-mascot');

console.log('Prune-assets: looking for', assetsPath);

try {
  if (fs.existsSync(assetsPath)) {
    fs.rmSync(assetsPath, { recursive: true, force: true });
    console.log('Prune-assets: removed', assetsPath);
  } else {
    console.log('Prune-assets: no assets to remove');
  }
} catch (err) {
  console.error('Prune-assets: failed to remove assets', err);
  process.exit(1);
}
