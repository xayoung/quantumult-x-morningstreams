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
modifiedHeaders['*'] = 'Access-Control-Allow-Origin';
modifiedHeaders['true'] = 'Access-Control-Allow-Credentials';
modifiedHeaders['GET, PUT, POST, DELETE, HEAD, OPTIONS'] = 'Access-Control-Allow-Methods';
$done({headers : modifiedHeaders});

// $done({headers : modifiedHeaders});
// $done({}); // Not changed.
