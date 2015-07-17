var ParentBot = require('./_SocketBot.js')
,   util = require('util')
,   ecDB = require('ecdb')
,   Result = require('../classes/Result.js');

var Bot = function (config) {
    if (!config) config = {};
    this.init(config);
};

util.inherits(Bot, ParentBot);

Bot.prototype.start = function() {
    var self = this;
    Bot.super_.prototype.start.apply(this);
    this.mq = require('socket.io-client')('ws://127.0.0.1', {'force new connection': true});
    this.mq.emit('add user', 'Finder');
};

/*
var list;
db.listData('products', function(e, d) {
    list = d;
});

this.mq.on('knock', function(msg) {
    self.mq.emit('pop', {});
});

this.mq.on('data', function(msg) {
    for(var k in list) {
        if(new RegExp(list[k]).test(msg.data)) {
            self.mq.emit('new Message', '有人在討論 ' + list[k]);
        }
    }
});
*/