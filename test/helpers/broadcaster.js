/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const tronWebBuilder = require('../helpers/tronWebBuilder');

module.exports = async function (func, pk, transaction) {
    const tronWeb = tronWebBuilder.createInstance();
    if( !transaction) {
        transaction = await func;
    }
    const signedTransaction = await tronWeb.trx.sign(transaction, pk);
    const result = {
        transaction,
        signedTransaction,
        receipt: await tronWeb.trx.sendRawTransaction(signedTransaction)
    };
    return Promise.resolve(result);
}
