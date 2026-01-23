import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== Diagnóstico de Configuración ===');
console.log('__dirname:', __dirname);
console.log('Alias @ debería apuntar a:', path.resolve(__dirname, './src'));
console.log('Existe src?:', require('fs').existsSync(path.resolve(__dirname, './src')));
console.log('BASE_URL en desarrollo:', '/');
