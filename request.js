var modifiedHeaders = $request.headers;
var url = $request.url;
if (url.indexOf('ott-video-cf.formula1.com') || url.indexOf('ott-video-fer-cf.formula1.com') || url.indexOf('f1tv.formula1.com')) {
  modifiedHeaders['undefined=true'] = 'Cookie';
  modifiedHeaders['https://f1tv.formula1.com/'] = 'Origin';
  modifiedHeaders['https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play'] = 'Referer';
  $done({headers : modifiedHeaders});
} else {
  $done({});
}