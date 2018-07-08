// === IMPORT SERVER ===
import app from './app';

// -  create port if needed
const PORT = process.env.PORT || 3000;

// === ESTABLISH CONNECTION ===
app.listen(PORT, () => console.log(`See the magic on port ${PORT}`));