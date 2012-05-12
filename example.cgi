#!/usr/bin/env node

var q = require("./cgi-pm");
q.print(q.http_header('text/html'));
q.print(q.start_html());
q.print ("Hi there");
//q.print("<pre>");
q.print(
    q.pre({ "class": "pre_class" }, function() {
        var string = 'This is a test\n';
        for (var p in process.env) {
            string += ''+p+': '+process.env[p]+'\n';
        }
        return string;
    })
);
//q.print("</pre>");
