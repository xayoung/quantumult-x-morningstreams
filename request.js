var modifiedHeaders = $request.headers;
modifiedHeaders['undefined=true'] = 'Cookie';
modifiedHeaders['https://f1tv.formula1.com/'] = 'Origin';
modifiedHeaders['https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play'] = 'Referer';
$done({headers : modifiedHeaders});
