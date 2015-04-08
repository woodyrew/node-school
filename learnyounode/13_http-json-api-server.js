"use strict";

var http = require('http');
var url = require('url');
var moment = require('moment');

var port = Number(process.argv[2]);


var notfound = function (res) {
	res.writeHead(404);
	res.end('Endpoint not found amigo.');
};

var writejson = function (res, response_object) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(response_object));
};

var server = http.createServer(function (req, res) {
	if (req.method === 'GET') {
		var route = url.parse(req.url, true);
		if (route.query.iso) {
			var passed_date = moment(route.query.iso);
			if (passed_date.isValid()) {
				if (route.pathname === '/api/parsetime') {
					var h_m_s = {
						"hour": +passed_date.format('HH'),
						"minute": +passed_date.format('mm'),
						"second": +passed_date.format('ss')
					};
					writejson(res, h_m_s);
				}
				else if (route.pathname === '/api/unixtime') {
					writejson(res, {"unixtime": +passed_date.format('x')});
				}
				else {
					notfound(res);
				}
			}
			else {
				notfound(res);
			}
		}

		
		
	}
	else {
		notfound(res);
	}
});
server.listen(port);

/* Official Answer:
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/