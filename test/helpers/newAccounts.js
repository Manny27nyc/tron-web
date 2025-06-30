// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const tronWebBuilder = require('./tronWebBuilder');
const tronWeb = tronWebBuilder.createInstance();

const amount = process.argv[2] || 10;

(async function () {
    await tronWebBuilder.newTestAccounts(amount)
})()

