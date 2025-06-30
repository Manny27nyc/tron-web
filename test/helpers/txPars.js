// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
module.exports = function (transaction) {
    return transaction.raw_data.contract[0].parameter;
}
