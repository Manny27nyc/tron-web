/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const _ = require('lodash');
const wait = require('./wait');
const tronWebBuilder = require('./tronWebBuilder')

module.exports = async function pollAccountFor(address, property, value = false, interval = 3, timeout = 10000) {
    const tronWeb = tronWebBuilder.createInstance()
    let now = Date.now()
    while (true) {
        if(Date.now() > now + timeout) {
            throw new Error('Timeout...');
        }
        wait(interval);
        let result = await tronWeb.trx.getAccount(address);
        if(typeof property === 'string') {
            let data = _.get(result, property)
            if(data) {
                if(value) {
                    if(data == value) return Promise.resolve(result);
                } else {
                    return Promise.resolve(result);
                }
            }
        } else if(typeof property === 'function') {
            if(property(result)) {
                return Promise.resolve(result);
            }

        }
    }
}
