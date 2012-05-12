var util = require("util");
var qs   = require("querystring");

exports.http_header = function(content_type) {
    var str = "";
    str = "Content-type: "+content_type+"\n\n";
    return str;
}
exports.start_html = function() {
    var str = "";
    str += "<!DOCTYPE html>";
    str += "<html>";
    return str;
}
exports.form_var = function() {
    var q = process.env['QUERY_STRING'];
    return qs.parse(q);
}
exports.dump = function() { 
    console.dir(arguments); 
}

exports.print = function() {
    for (x in arguments) {
        util.puts(arguments[x]);
    }
}
exports.pre = function(attrs, content) {
    var attributes = '';
    for (var a in attrs) {
        attributes += a+'="'+attrs[a]+'" ';
    }
    var str = '<pre '+attributes+'>';
    str += content();
    str += "\n";
    str += '</pre>';
    return str;
}
