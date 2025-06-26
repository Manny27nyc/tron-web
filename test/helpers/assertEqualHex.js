/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const assert = require('chai').assert;
const tronWebBuilder = require('./tronWebBuilder');

module.exports = async function (result, string) {

    assert.equal(
        result,
        tronWebBuilder.getInstance().toHex(string).substring(2)
    )
}
