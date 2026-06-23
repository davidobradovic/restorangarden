const fs = require('fs');
let content = fs.readFileSync('src/lib/i18n/translations.ts', 'utf-8');
const lines = content.split('\n');
for (let i = 250; i < 350; i++) {
  console.log(`${i}: ${lines[i]}`);
}
