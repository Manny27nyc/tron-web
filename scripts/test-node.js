/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const fs = require('fs');
const path = require('path');
const target = path.resolve(__dirname, '..', 'test', 'setup', 'TronWeb.js');

try {
    fs.unlinkSync(target);
} catch(ex) {}

fs.copyFileSync(
    path.resolve(__dirname, '..', 'test', 'setup', 'node.js'),
    target
);