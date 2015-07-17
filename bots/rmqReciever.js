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
	this.mq.emit('add user', 'rmqReciever');


};

/*

var amqp = require('amqp');
var connection = amqp.createConnection({ host: '127.0.0.1' });

// Wait for connection to become established.
connection.on('ready', function () {
	// Use the default 'amq.topic' exchange
	connection.queue('my-queue', function (q) {
		// Catch all messages
		q.bind('rabbitExchange','#');

		// Receive messages
		q.subscribe(function (msg) {
			// Print messages to stdout
			self.mq.emit('new message', 'I got message: ' + msg);
		});
	});
});

*/