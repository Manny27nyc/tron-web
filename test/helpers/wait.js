/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
const chalk = require('chalk')

function log(x) {
    process.stdout.write(chalk.yellow(x))
}

module.exports = async function (secs) {
    secs = secs || 1
    log(`Sleeping for ${secs} second${secs === 1 ? '' : 's'}...`)
    await sleep(1000 * (secs || 1))
    log(' Slept.\n')
}
