// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
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
