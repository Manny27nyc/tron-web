/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import axios from 'axios';
import utils from 'utils';

export default class HttpProvider {
    constructor(host, timeout = 30000, user = false, password = false, headers = {}, statusPage = '/') {
        if(!utils.isValidURL(host))
            throw new Error('Invalid URL provided to HttpProvider');

        if(isNaN(timeout) || timeout < 0)
            throw new Error('Invalid timeout duration provided');

        if(!utils.isObject(headers))
            throw new Error('Invalid headers object provided');

        host = host.replace(/\/+$/, '');

        this.host = host;
        this.timeout = timeout;
        this.user = user;
        this.password = password;
        this.headers = headers;
        this.statusPage = statusPage;

        this.instance = axios.create({
            baseURL: host,
            timeout: timeout,
            headers: headers,
            auth: user && {
                user,
                password
            },
        });
    }

    setStatusPage(statusPage = '/') {
        this.statusPage = statusPage;
    }

    async isConnected(statusPage = this.statusPage) {
        return this.request(statusPage).then(data => {
            return utils.hasProperties(data, 'blockID', 'block_header');
        }).catch(() => false);
    }

    request(url, payload = {}, method = 'get') {
        method = method.toLowerCase();

        return this.instance.request({
            data: method == 'post' && Object.keys(payload).length ? payload : null,
            params: method == 'get' && payload,
            url,
            method
        }).then(({data}) => data);
    }
};
