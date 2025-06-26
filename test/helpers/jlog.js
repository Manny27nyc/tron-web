/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const chalk = require('chalk')

module.exports = (...x) => {
    for(let i = 0; i < x.length; i++) {
        console.log(chalk.blue(typeof x[i] === 'object' ? JSON.stringify(x[i], null, 2) : x[i]))
    }
}
