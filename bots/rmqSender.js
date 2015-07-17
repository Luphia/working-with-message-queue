var ParentBot = require('./_SocketBot.js')
,	util = require('util')
,	ecDB = require('ecdb')
,	Result = require('../classes/Result.js');

var Bot = function (config) {
	if (!config) config = {};
	this.init(config);
};

util.inherits(Bot, ParentBot);

Bot.prototype.start = function() {
	var self = this;
	Bot.super_.prototype.start.apply(this);
	this.mq = require('socket.io-client')('ws://127.0.0.1', {'force new connection': true});
	this.mq.emit('add user', 'rmqSender');
};

module.exports = Bot;
/*
var rabbitMQ = amqp.createConnection({ host: '127.0.0.1' });
var exchange;

rabbitMQ.addListener('ready', function(){
	// create the exchange if it doesnt exist
	exchange = rabbitMQ.exchange('rabbitExchange',{'type':'fanout'})''

	setTimeout(function() {
		exchange.publish('my-queue', 'Yo');
	}, 3000);
});

*/