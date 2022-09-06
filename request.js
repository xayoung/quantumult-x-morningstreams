var modifiedHeaders = $request.headers;
$prefs.setValueForKey('undefined', "f1msck");
var path = $request.path;
var token = path.split('&ascendontoken=')[1];
modifiedHeaders['ascendontoken'] = token;
modifiedHeaders['Cookie'] = 'undefined=true';
modifiedHeaders['Origin'] = 'https://f1tv.formula1.com/';
modifiedHeaders['Referer'] = 'https://f1tv.formula1.com/detail/1000005114/2022-saudi-arabian-grand-prix?action=play';
$done({headers : modifiedHeaders});
