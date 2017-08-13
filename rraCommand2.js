/**
 * Created by Nikoliasik_Zeus 13.08.17
 */
let EventEmitter = require('eventemitter3');
// let request = require("request");
let axios = require('axios');
let winston = require("winston");
/**
 * The base command class
 * @extends EventEmitter
 *
 */
class Command extends EventEmitter {
    constructor () {
        super();
        this.setMaxListeners(50);
    }

    /**
     * The main function of the command
     * @param {Object} msg
     */
    async run (msg) {
        try {
          /*  до лучших времен let res = await axios.get('https://rra.ram.moe/i/r', {params: {"type": this.cmd}}); 
            let path = res.data.path.replace('/i/', '');  */
            msg.channel.createMessage(`http://i.imgur.com/bv2CSXV.png`);
        } catch (e) {
            return winston.error(e);
        }
    }
}
module.exports = Command;