import dev from './dev1.js';
import prod from './prod.js';
const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default config;
