var redis = require("redis"),
    client = redis.createClient();

client.auth('123')
// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });
 
client.on("error", function (err) {
    console.log("Error " + err);
});
client.set("string key", "string val");
client.get("string key", (err, reply)=>{
console.log([err, reply])
})
