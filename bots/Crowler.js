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
    this.mq.emit('add user', 'Crowler');
};

/*
var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    maxConnections : 10,
    callback: function (error, result, $) {
        $('a').each(function(index, a) {
            var toQueueUrl = $(a).attr('href');
            var s = $(a).html()
            self.mq.emit('push', {"data": s}});
        });
    }
});

c.queue('https://www.ptt.cc/bbs/MobileComm/index.html');
*/