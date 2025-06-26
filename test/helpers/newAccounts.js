/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const tronWebBuilder = require('./tronWebBuilder');
const tronWeb = tronWebBuilder.createInstance();

const amount = process.argv[2] || 10;

(async function () {
    await tronWebBuilder.newTestAccounts(amount)
})()

