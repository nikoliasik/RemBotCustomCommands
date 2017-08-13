let RRACommand = require('../../structures/rraCommand2');
class Kidi extends RRACommand {
    constructor({t}) {
        super();
        this.cmd = 'kidi';
        this.cat = 'image';
        this.needGuild = false;
        this.t = t;
        this.accessLevel = 0;
    }
}
module.exports = Kidi;