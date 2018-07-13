exports.handler = function(event, context, callback) {
    // your server-side functionality
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(context));
}