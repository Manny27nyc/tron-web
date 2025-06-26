/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
module.exports = (...x) => {
    for(let i = 0; i < x.length; i++) {
        let y = x[i]
        if(Array.isArray(y)) {
            for(let j = 0; j < y.length; j++) {
                console.log(j, y[j].valueOf())
            }
        } else if(typeof y === 'object') {
            console.log(y.valueOf())
        } else {
            console.log(y)
        }
    }
}
