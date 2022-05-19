/**
 * @fileoverview Example of HTTP rewrite of response header.
 *
 * @supported Quantumult X (v1.0.5-build183)
 *
 * [rewrite_local]
 * ^http://example\.com/resource8/ url script-response-header response-header.js
 */

// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers

var modifiedHeaders = $response.headers;
var cookie = modifiedHeaders.Cookie;
$prefs.setValueForKey(cookie, "f1msck");
modifiedHeaders['Access-Control-Allow-Origin'] = '*';
modifiedHeaders['Access-Control-Allow-Credentials'] = 'true';
modifiedHeaders['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, HEAD, OPTIONS';
$done({headers : modifiedHeaders});

// $done({headers : modifiedHeaders});
// $done({}); // Not changed.
