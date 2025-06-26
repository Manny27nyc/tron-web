/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const chai = require('chai');
const {FULL_NODE_API} = require('../helpers/config');
const assertThrow = require('../helpers/assertThrow');
const tronWebBuilder = require('../helpers/tronWebBuilder');
const TronWeb = tronWebBuilder.TronWeb;
const GetNowBlock = require('../helpers/getnowblock');
const jlog = require('../helpers/jlog')

const assert = chai.assert;

describe('TronWeb.lib.plugin', async function () {

    let tronWeb;

    before(async function () {
        tronWeb = tronWebBuilder.createInstance();
    });

    describe('#constructor()', function () {

        it('should have been set a full instance in tronWeb', function () {

            assert.instanceOf(tronWeb.plugin, TronWeb.Plugin);
        });

    });

    describe("#plug GetNowBlock", async function () {

        it('should register the plugin GetNowBlock', async function () {

            let result = tronWeb.plugin.register(GetNowBlock)
            assert.isTrue(result.skipped.includes('_parseToken'))
            assert.isTrue(result.plugged.includes('getCurrentBlock'))
            assert.isTrue(result.plugged.includes('getLatestBlock'))

            result = await tronWeb.trx.getCurrentBlock()
            assert.isTrue(result.fromPlugin)

        })

    });


});
