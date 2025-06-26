/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const chai = require('chai');
const {ADDRESS_HEX, ADDRESS_BASE58} = require('../helpers/config');
const tronWebBuilder = require('../helpers/tronWebBuilder');

const assert = chai.assert;

describe('TronWeb.utils.accounts', function () {

    describe('#generateAccount()', function () {

        it("should generate a new account", async function () {
            const tronWeb = tronWebBuilder.createInstance();

            const newAccount = await tronWeb.utils.accounts.generateAccount();
            assert.equal(newAccount.privateKey.length, 64);
            assert.equal(newAccount.publicKey.length, 130);
            let address = tronWeb.address.fromPrivateKey(newAccount.privateKey);
            assert.equal(address, newAccount.address.base58);

            assert.equal(tronWeb.address.toHex(address), newAccount.address.hex.toLowerCase());
        });
    });
});
