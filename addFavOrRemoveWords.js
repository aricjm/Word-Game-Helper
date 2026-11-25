// ### Retrieve from your browser
// 1. Open the deployed app in the browser you used to star/remove words.
// 2. Open DevTools (F12 or right-click → Inspect).
// 3. Go to the __Application__ tab → __Local Storage__ → `https://aricjm.github.io`.
// 4. Look for these keys:
//    - `letterbox-favorites-v1`
//    - `letterbox-removed-words-v1`
//    - `letterbox-half-words-v1`

// Or run this in the __Console__ to dump all three as readable JSON:

const favorites = JSON.parse(localStorage.getItem('letterbox-favorites-v1') || '[]');
const removed   = JSON.parse(localStorage.getItem('letterbox-removed-words-v1') || '[]');
const halfWords = JSON.parse(localStorage.getItem('letterbox-half-words-v1') || '[]');

console.log('FAVORITES (' + favorites.length + '):', favorites);
console.log('REMOVED (' + removed.length + '):', removed);
console.log('HALF WORDS (' + halfWords.length + '):', halfWords);

// Copy-friendly combined export
console.log('--- COPY BELOW ---');
console.log(JSON.stringify({ favorites, removed, halfWords }, null, 2));
